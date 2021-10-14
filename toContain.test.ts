test('array contain', () => {
    const colors = ["Red", "Yellow", "Blue"];
    expect(colors).toContain("Yellow");
    expect(colors).not.toContain("Green"); // 불만족 검사
})
// 배열에 원소 유무 검사