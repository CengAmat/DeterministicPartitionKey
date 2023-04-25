const createSha3Hash = require("./createSha3Hash");
const getPartitionKey = require("./getPartitionKey");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionKey;

  if (!event) return TRIVIAL_PARTITION_KEY;

  partitionKey = getPartitionKey(event);

  if (partitionKey.length > MAX_PARTITION_KEY_LENGTH) {
    partitionKey = createSha3Hash(partitionKey);
  }

  return partitionKey;
};
