const router = require("express").Router();
const { UserController } = require("../Controllers");

router.get("/loguser", UserController.LogUser);
module.exports = router;
