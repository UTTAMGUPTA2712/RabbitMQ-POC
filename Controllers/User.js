const { UserSchema } = require("../Models");

const LogUser = async (req, res) => {
  const findUser = await UserSchema.findOne({ name: req.body.name });
  console.log("result", findUser);
  if (findUser) {
    res.status(200).send(findUser);
  } else {
    await UserSchema.create({ name: req.body.name })
      .then((user) => {
        console.log(user);
        res.status(200).send(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send(err._message);
      });
  }
};
module.exports = { LogUser };
