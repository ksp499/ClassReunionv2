const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const usersController = require("../controllers/usersController");
const commentsController = require("../controllers/commentsController");

// API Routes
//router.use("/api", apiRoutes);

router
  .route("/api/users")
  .get(usersController.findAll)
  .post(usersController.create)
  .delete(usersController.remove);

router
  .route("/api/users/loggedin")
  .get(usersController.findLoggedin);
  
router
  .route("/api/users/:id")
  .get(usersController.findByUserName)
  .put(usersController.updateLoginStatus);

router
  .route("/api/comments")
  .get(commentsController.findAll)
  .post(commentsController.create)
  .delete(commentsController.remove);

router
  .route("/api/comments/:id")
  .get(commentsController.findById)
  .put(commentsController.update);

router
  .route("/api/comments/key/:id")
  .put(commentsController.updateKey);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../Client/public/index.html"));
});

module.exports = router;