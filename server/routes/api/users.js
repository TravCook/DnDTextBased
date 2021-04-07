const router = require("express").Router();
const userController = require("../../../controllers/userController")

//matches with /api/user
router.route("/")
  .post(userController.create)

router.route("/:email")
  .get(userController.find)

module.exports = router;


