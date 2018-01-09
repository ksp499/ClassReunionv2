const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userName: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  //email: {type: String, required: true},
  address: String,
  city: String,
  state: String,
  zipCode: String
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;