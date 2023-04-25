const createSha3Hash = require("./createSha3Hash");

describe("createSha3Hash", () => {
  it("Returns exception when given no input", () => {
    expect(() => createSha3Hash()).toThrow("Invalid Input!");
  });

  it("Returns hash data when given input", () => {
    const shaHash = createSha3Hash("ewioghowirghew095u3itjrio");
    expect(shaHash).not.toBe(0);
  });
});
