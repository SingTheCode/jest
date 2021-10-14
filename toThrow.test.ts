const getUser = require("./getUser")

test("throw when id is non negative", () => {
    expect(() => getUser(-1)).toThrow();
    expect(() => getUser(-1)).toThrow("Invalid ID");
})