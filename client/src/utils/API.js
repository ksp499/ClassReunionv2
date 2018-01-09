import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    console.log(userData);
    return axios.post("/api/users/", userData);
  },
  // Saves a comment to the database
  saveComment: function(commentData) {
    return axios.post("/api/comment/", commentData);
  }
};
