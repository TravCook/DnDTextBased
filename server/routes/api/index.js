const router = require("express").Router();
const userRoutes = require("./users");

// USER routes
router.use("/user", userRoutes);

module.exports = router;