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
    commentBoxId: 0,
    comment_obj: [],
    last_key: 0
  },
  {
    commentBoxId: 1,
    comment_obj: [],
    last_key: 0
  },
  {
    commentBoxId: 2,
    comment_obj: [],
    last_key: 0
  },
  {
    commentBoxId: 3,
    comment_obj: [],
    last_key: 0
  },
  {
    commentBoxId: 4,
    comment_obj: [],
    last_key: 0
  },
  {
    commentBoxId: 5,
    comment_obj: [],
    last_key: 0
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