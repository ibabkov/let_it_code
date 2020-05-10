export class Logger {
  constructor() {
    this._lastPrint = new Map();
  }
  /**
   * Returns true if the message should be printed in the given timestamp, otherwise returns false.
   If this method returns false, the message will not be printed.
   The timestamp is in seconds granularity.
   * @param {number} timestamp
   * @param {string} message
   * @return {boolean}
   */
  shouldPrintMessage = (timestamp, message) => {
    if (
      !this._lastPrint.has(message)
      || timestamp - this._lastPrint.get(message) >= 10
    ) {
      this._lastPrint.set(message, timestamp);
      return true;
    }

    return false;
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */