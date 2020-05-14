/**
 * @param {string[]} logs
 * @return {string[]}
 */
export var reorderLogFiles = function(logs) {
  const letterLogs = [];
  const digitLogs = [];

  logs.forEach((str) => {
    let isDigit = isFinite(Number(str.replace(/^[a-z0-9]+\s|\s/g, '')));

    if (isDigit) digitLogs.push(str);
    else letterLogs.push(str);
  });

  letterLogs.sort((a, b) => {
    let log1 = a.replace(/^[a-z0-9]+\s/g, '');
    let log2 = b.replace(/^[a-z0-9]+\s/g, '');

    if (log1 === log2) {
      log1 = a; log2 = b;
    }
    return log1.localeCompare(log2);
  });

  return letterLogs.concat(digitLogs);
};