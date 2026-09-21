/**
 * Gmail ラベル操作。
 * 既存の "Tanuki Tabi Travel/..." 階層だけを使う。別ルート（Tanuki/ 等）は作らない。
 */

/**
 * ラベルを取得する。無ければ既存ルートの配下に作る。
 * ルート名が Config の LABEL_ROOT と違う名前のラベルは作らせない。
 */
function getTanukiLabel(labelName) {
  if (labelName !== LABEL_ROOT && labelName.indexOf(LABEL_ROOT + '/') !== 0) {
    throw new Error('Tanuki 以外のラベルは扱いません: ' + labelName);
  }
  const existing = GmailApp.getUserLabelByName(labelName);
  return existing || GmailApp.createLabel(labelName);
}

/**
 * メッセージが属するスレッドにラベルを付ける。
 * Gmail のラベルはスレッド単位なので、対象は message.getThread()。
 * ラベル付与の失敗で Draft 作成そのものを失敗扱いにはしない。
 */
function applyLabelToMessage(message, labelName) {
  try {
    getTanukiLabel(labelName).addToThread(message.getThread());
    return true;
  } catch (e) {
    console.warn(JSON.stringify({
      event: 'label_failed',
      label: labelName,
      error: String(e && e.message),
    }));
    return false;
  }
}
