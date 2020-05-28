class Main {
  constructor() {
    // do preparation
  }

  _paint = ({ target, currentTarget }) => {
    this._clean(currentTarget);
    target.classList.add('gray');
  };

  _clean = (node) => {
    node.classList.remove('gray');

    if (node.children.length) this._clean(node.children[0])
  };

  addPaintListener = () => {
    const container = document.querySelector('.red');

    container.addEventListener('click', this._paint);
  }
}