const crypto = require("crypto");

// This function creates SHA3-512 Hash of a given data
const createSha3Hash = (data) => {
  if (!data) throw new Error("Invalid Input!");

  const hash = crypto.createHash("sha3-512").update(data).digest("hex");

  return hash;
};

module.exports = createSha3Hash;
