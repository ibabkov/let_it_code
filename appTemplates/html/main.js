class Main {
  constructor() {
    // do preparation
  }

  static createTag(name, className = '', html = '') {
    const element = document.createElement(name);
    element.className = className;
    element.innerHTML = html;
    return element;
  }

  render() {
    const appContainer = document.querySelector("#app");

    appContainer.appendChild(Main.createTag('span', 'text', 'Hello World'));
  }
}