function formatDate(date) {
  return Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy-MM-dd');
}

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
}

function getOrCreateSheet(ss, name) {
  let s = ss.getSheetByName(name);
  if (!s) s = ss.insertSheet(name);
  return s;
}

/**
 * 日付に基づくフォルダ構造を取得/作成する
 * 親フォルダ → 年フォルダ → 月フォルダ → 日フォルダ
 * @param {string} dateStr - 'yyyy-MM-dd' 形式の日付
 * @return {Folder} 日フォルダ
 */
function getDateFolder(dateStr) {
  const parts = dateStr.split('-');
  const year = parts[0];         // "2026"
  const month = parts[1];        // "03"
  const day = parts[2];          // "12"

  // 親フォルダを取得または作成
  const parentFolder = getOrCreateFolder_(null, 'SEO Pipeline Reports');

  // 年 → 月 → 日 のフォルダ構造を作成
  const yearFolder = getOrCreateFolder_(parentFolder, year);
  const monthFolder = getOrCreateFolder_(yearFolder, `${year}-${month}`);
  const dayFolder = getOrCreateFolder_(monthFolder, `${year}-${month}-${day}`);

  return dayFolder;
}

/**
 * 指定した親フォルダ内にサブフォルダを取得/作成する
 * @param {Folder|null} parent - 親フォルダ（nullならマイドライブ直下）
 * @param {string} name - フォルダ名
 * @return {Folder}
 */
function getOrCreateFolder_(parent, name) {
  const root = parent || DriveApp.getRootFolder();
  const folders = root.getFoldersByName(name);

  if (folders.hasNext()) {
    return folders.next();
  }
  return root.createFolder(name);
}

/**
 * レポートファイルを日付フォルダに保存する
 * @param {Blob} blob - 保存するファイル（PDF等）
 * @param {string} dateStr - 'yyyy-MM-dd' 形式の日付
 * @param {string} fileName - ファイル名
 * @return {File} 作成されたファイル
 */
function saveReportToDateFolder(blob, dateStr, fileName) {
  const folder = getDateFolder(dateStr);
  blob.setName(fileName);
  const file = folder.createFile(blob);
  Logger.log(`レポート保存: ${folder.getName()}/${fileName}`);
  return file;
}
