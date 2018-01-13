const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  address: String,
  city: String,
  state: String,
  zipCode: String,
  logged_in: Boolean
});

const User = mongoose.model("User", userSchema);

module.exports = User;