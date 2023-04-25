const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the given input", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "ewioghowirghew095u3itjrio",
    });
    expect(trivialKey).toBe("ewioghowirghew095u3itjrio");
  });

  it("Returns partition key when given empty partitionKey input", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: "",
    });
    expect(trivialKey).not.toBe(0);
  });

  it("Returns partition key when given null partitionKey input", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: null,
    });
    expect(trivialKey).not.toBe(0);
  });

  it("Returns partition key when given partitionKey input as json object", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: {
        key: "ewioghowirghew095u3itjrio",
      },
    });

    expect(trivialKey).not.toBe(0);
  });
});
