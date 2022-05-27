const math = require('../src/math');

test('add: 1 + 2 = 3', () => {
    expect(math.add(1, 2)).toBe(3);
});

test('sub: 1 - 2 = -1', () => {
    expect(math.sub(1, 2)).toBe(-1);
});

// let x: number = '1' 
// babel-jest 测试，类型错误不会报错
// 如果需要进行类型检查，也需要单独的一个命令行npm run type-check

