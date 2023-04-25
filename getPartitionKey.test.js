const getPartitionKey = require("./getPartitionKey");

describe("getPartitionKey", () => {
  it("Returns exception when given no input", () => {
    expect(() => getPartitionKey()).toThrow("Invalid Input!");
  });

  it("Returns partition key when given input", () => {
    const partitionKey = getPartitionKey("ewioghowirghew095u3itjrio");
    expect(partitionKey).not.toBe(0);
  });
});
