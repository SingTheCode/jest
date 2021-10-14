const sum = require('./user');

test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
// 숫자, 문자와 같은 객체가 아닌 기본형 값을 비교