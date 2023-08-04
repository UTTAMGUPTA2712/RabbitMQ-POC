const router = require("express").Router();
const { TaskController } = require("../Controllers");

router.post("/addtask", TaskController.AddTask);
module.exports = router;
