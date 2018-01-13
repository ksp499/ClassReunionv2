import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  getLoggedInUser: function() {
    return axios.get("/api/users/loggedin");
  },
  // Saves a user to the database
  saveUser: function(userData) {
    console.log(userData);
    return axios.post("/api/users/", userData);
  },
  validateUser: function(userName) {
    return axios.get("/api/users/" + userName);
  },
  updateLoginStatus: function(userName, body) {
    return axios.put("api/users/" + userName, body);
  },
  // Saves a comment to the database
  saveComment: function(commentData) {
    return axios.post("/api/comments/", commentData);
  },
  // Gets the comment with the given id
  getComment: function(id) {
    return axios.get("/api/comments/" + id);
  },
  // Updates the comment with the given id
  updateComment: function(id, body) {
    return axios.put("/api/comments/" + id, body);
  },
  updateCommentKey: function(id, body) {
    return axios.put("/api/comments/key/" + id, body);
  },
  // Gets all comments
  getComments: function() {
    return axios.get("/api/comments/");
  }
};
