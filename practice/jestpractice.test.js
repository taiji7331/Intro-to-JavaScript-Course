const { default: TestRunner } = require("jest-runner");
const addFive = require(`./jestpractice`);

test("returns the number plus 5", () => {
    expect(addFive(1)).toBe(6);
    expect(addFive("1")).toBe(6);
})