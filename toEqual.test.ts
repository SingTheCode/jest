const getUser = require("./getUser");

test("return a user object", () => {
    expect(getUser(1)).toEqual({
        id: 1,
        email: `user1@test.com`,
    })
})
// toBe 보다 toEqual을 선호한다.
// toEqual은 객체까지 검증할 수 있다.
// 가장 많이 쓰이는 함수