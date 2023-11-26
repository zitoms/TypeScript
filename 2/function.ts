function Add(a: number, b: number) {
  return a + b;
}

const foo: (input1: number, input2: number) => number = Add;
// const foo: Function = Add;

console.log(foo(1, 2));
