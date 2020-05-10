export class MaxStack {
  constructor() { this._stack = []; }

  push = (val) => { this._stack.push(val); };

  pop = () => this._stack.pop();

  top = () => this._stack[this._stack.length - 1];

  _peekMaxIndex = () => {
    let maxIndex = null;

    for (let i = 0, max = -Infinity; i < this._stack.length; i++) {
      if (this._stack[i] > max) max = this._stack[i];
      if (this._stack[i] >= max) maxIndex = i;
    }

    return maxIndex;
  }


  peekMax = () => this._stack[this._peekMaxIndex()];

  popMax = () => this._stack.splice(this._peekMaxIndex(), 1)[0];
}