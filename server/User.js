const { model, Schema } = require("mongoose");

//GraphQL will handle required fields, so we will leave !s out heres
const userSchema = new Schema({
  email: String!,
  username: String,
  password: String,
  createdAt: String
});

module.exports = model("User", userSchema);
