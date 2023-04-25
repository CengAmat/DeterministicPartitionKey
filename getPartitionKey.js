const createSha3Hash = require("./createSha3Hash");

// This function checks if the input data has partition key. If it doesn't, it generates
const getPartitionKey = (data) => {
  let partitionKey;

  if (!data) throw new Error("Invalid Input!");

  if (data?.partitionKey) {
    partitionKey =
      typeof data.partitionKey !== "string"
        ? JSON.stringify(data.partitionKey)
        : data.partitionKey;
  } else {
    partitionKey = createSha3Hash(JSON.stringify(data));
  }

  return partitionKey;
};

module.exports = getPartitionKey;
