const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router
  .route("/users")
  .get(usersController.findAll)
  .post(usersController.create)
  .delete(usersController.remove);

module.exports = router;
