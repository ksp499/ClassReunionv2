const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/accountinfo",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    userName: "ksp499",
    password: "123456",
    email: "ksp499@gmail.com",
    firstName: "Kyeong",
    lastName: "Park"
  }
];

const commentSeed = [
  {
    commentBoxId: 999,
    comment_obj: []
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    //process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Comment
  .remove({})
  .then(() => db.Comment.collection.insertMany(commentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });