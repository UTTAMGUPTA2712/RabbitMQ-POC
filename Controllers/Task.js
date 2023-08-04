const { TaskSchema, UserSchema } = require("../Models");

const AddTask = async (req, res) => {
  await TaskSchema.create(req.body)
    .then(async (task) => {
      console.log(task);
      await UserSchema.updateOne(
        { name: req.body.user },
        { $push: { task: task._id } }
      )
        .then((user) => {
          console.log(user);
          res.status(200).send({ task: task._id, data: task });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err._message);
        });
      res.status(200).send(req.body.name);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err._message);
    });
};
module.exports = { AddTask };
