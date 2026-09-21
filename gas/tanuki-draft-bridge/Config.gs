/**
 * Tanuki Reply Copilot - Draft Bridge
 * 定数と設定。
 *
 * このプロジェクトは Tanuki Tabi Travel 専用。Camino Japan Travel の
 * Sheet / Drive / Label / 顧客には一切アクセスしない。ブランド判定は
 * Validation.gs の allowlist が唯一の入口で、ここに書かれているリソースは
 * すべて Tanuki 所有のものを ID で直接指している。
 */

/** Draft Queue で処理を許可する唯一のブランド値 */
const BRAND_TANUKI = 'TANUKI';

/**
 * Tanuki の送信元。個人アドレスへの fallback は禁止で、この From を
 * 付けられなかった Draft は保存せず削除する（GmailDraftService.gs）。
 */
const TANUKI_FROM_EMAIL = 'info@tanuki-tabi-travel.com';
const TANUKI_FROM_NAME = 'Tanuki Tabi Travel';

/**
 * "Tanuki Reply Copilot - Source of Truth"
 * Drive: Tanuki Tabi Travel / 06_システム・自動化
 *
 * 同名のスプレッドシートがもう1つ存在するが、そちらは Automation Log に
 * SETUP のプレースホルダ1行しかない空のコピー。名前で解決すると取り違える
 * ため ID を固定する。Script Property TANUKI_SOURCE_SHEET_ID で上書き可能。
 */
const DEFAULT_SOURCE_SHEET_ID = '107Tk2BbZH1QRKpzOrB2ieV1fQ6SLH5hq05Lzs2SAYzs';
const DEFAULT_DRAFT_QUEUE_SHEET_NAME = 'Draft Queue';

/**
 * 顧客に見せる返信件名。
 *
 * 返信先スレッドは Queue の Gmail Message ID のまま変えないが、Netlify の
 * 内部通知件名（"[Tanuki Inquiry] 299 | contact"）がそのまま顧客に見えるのは
 * 避けたいので、件名だけ差し替える。スレッドは In-Reply-To / References で
 * 維持されるため、取り違えのリスクは増えない。
 *
 * Queue の Subject 列に値があればそれを優先する。
 */
const CUSTOMER_SUBJECT_DEFAULT = {
  en: 'Your Tokyo tour inquiry',
  es: 'Tu consulta sobre el tour en Tokio',
};

/** 顧客向け件名に残ってはいけない内部マーカー */
const INTERNAL_SUBJECT_MARKERS = ['[Tanuki Inquiry]', 'Contact from website'];

/** 1回の実行で Draft を作る上限。トリガーの暴走と Gmail クォータ超過を防ぐ */
const MAX_PER_RUN = 10;
const LOCK_TIMEOUT_MS = 30 * 1000;

/** 既存のラベル階層。新しいルートラベル（Tanuki/ 等）は作らない */
const LABEL_ROOT = 'Tanuki Tabi Travel';
const LABEL_AI_DRAFTED = LABEL_ROOT + '/AI Drafted';
const LABEL_PROCESSED = LABEL_ROOT + '/Processed';
const LABEL_ERROR = LABEL_ROOT + '/Error';

/**
 * 顧客宛先として絶対に使わないアドレス。
 * formresponses@netlify.com はフォーム通知の差出人で、Reply-To が無い
 * submission ではこれが返信先になってしまう。info@ は自分自身。
 */
const BLOCKED_RECIPIENT_ADDRESSES = [
  'formresponses@netlify.com',
  'info@tanuki-tabi-travel.com',
];

/**
 * ドメイン単位のブロック。顧客が自社ドメインや Netlify のアドレスを
 * 使うことはない。camino-japan-travel.com はブランドゲートの二重防御。
 */
const BLOCKED_RECIPIENT_DOMAINS = [
  'tanuki-tabi-travel.com',
  'netlify.com',
  'camino-japan-travel.com',
];

/** Draft Queue の Status */
const STATUS = {
  PENDING: 'PENDING',
  READY_TO_DRAFT: 'READY_TO_DRAFT',
  PROCESSING: 'PROCESSING',
  DONE: 'DONE',
  ERROR: 'ERROR',
  SKIPPED: 'SKIPPED',
};

/** Draft Queue の QA Status */
const QA_PASS = 'PASS';

/** Error / Risk Flags に記録するコード */
const ERROR_CODE = {
  ALIAS_NOT_FOUND: 'ALIAS_NOT_FOUND',
  MESSAGE_NOT_FOUND: 'MESSAGE_NOT_FOUND',
  THREAD_MISMATCH: 'THREAD_MISMATCH',
  INVALID_CUSTOMER_EMAIL: 'INVALID_CUSTOMER_EMAIL',
  INTERNAL_EMAIL_DETECTED: 'INTERNAL_EMAIL_DETECTED',
  AMBIGUOUS_CUSTOMER_THREAD: 'AMBIGUOUS_CUSTOMER_THREAD',
  DUPLICATE_QUEUE: 'DUPLICATE_QUEUE',
  DRAFT_ALREADY_EXISTS: 'DRAFT_ALREADY_EXISTS',
  GMAIL_RATE_LIMIT: 'GMAIL_RATE_LIMIT',
  // createDraftReply は宛先をメッセージ側から決めるため、作成後に実際の
  // To を読み直して Queue の Customer Email と突き合わせる。その不一致。
  RECIPIENT_MISMATCH: 'RECIPIENT_MISMATCH',
  // 同様に、指定した From が実際には反映されなかった場合。
  FROM_NOT_APPLIED: 'FROM_NOT_APPLIED',
  MISSING_REQUIRED_FIELD: 'MISSING_REQUIRED_FIELD',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
};

/** Draft Queue の列名。ChatGPT 側との入力契約でもある */
const QUEUE_COLUMNS = [
  'Queue ID',
  'Brand',
  'Created At',
  'Gmail Message ID',
  'Gmail Thread ID',
  'Customer Name',
  'Customer Email',
  'Language',
  'Subject',
  'Reply Body',
  'QA Status',
  'Human Review',
  'Risk Flags',
  'Status',
  'Draft ID',
  'Error',
  'Processed At',
];

function getSourceSheetId() {
  const override = PropertiesService.getScriptProperties()
    .getProperty('TANUKI_SOURCE_SHEET_ID');
  return override || DEFAULT_SOURCE_SHEET_ID;
}

function getDraftQueueSheetName() {
  const override = PropertiesService.getScriptProperties()
    .getProperty('DRAFT_QUEUE_SHEET_NAME');
  return override || DEFAULT_DRAFT_QUEUE_SHEET_NAME;
}

function nowJst() {
  return Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss') + ' JST';
}
