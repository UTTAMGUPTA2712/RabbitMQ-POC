const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("working!!!");
});
router.use("/task",require('./Task'))
router.use("/user",require('./User'))

module.exports = router;
