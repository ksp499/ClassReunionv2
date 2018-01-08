const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const usersController = require("../controllers/usersController");

// API Routes
//router.use("/api", apiRoutes);

router
  .route("/api/users")
  .get(usersController.findAll)
  .post(usersController.create)
  .delete(usersController.remove);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;