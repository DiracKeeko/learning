const math = require("../src/math");

test("addd: 1 + 2 = 3", () => {
  expect(math.addd(1, 2)).toBe(3);
});

test("sub: 1 - 2 = -1", () => {
  expect(math.sub(1, 2)).toBe(-1);
});

// let x: number = '1' // 报错
// ts-jest 可以检查.test.ts文件中的类型错误
