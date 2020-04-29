const myFunc = function() {
  return typeof this;
};

class MyClass {
  constructor() {
    // do preparations
  }

  static staticContextMethod() {
    return typeof this;
  }

  static staticMethod = () => {
    return typeof this;
  };

  method() {
    return typeof this;
  }

  contextMethod = () => {
    return typeof this;
  };
}

console.log('myFunc', myFunc());

console.log('MyClass.staticMethod', MyClass.staticMethod());
console.log('MyClass.staticContextMethod', MyClass.staticContextMethod());

const obj = new MyClass();
console.log('obj.method', obj.method());
console.log('obj.contextMethod', obj.contextMethod());