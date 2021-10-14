test("number 0 is falsy but string 0 is truthy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect(true).toBeTruthy();
    expect("0").toBeTruthy();
})
// 1, true toBeTruthy()
// 0, false toBeFalsy()