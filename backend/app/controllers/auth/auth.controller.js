const User = require("./../../models/user.model");

async function LoginUser(req, res) {
  const newUser = new User("mohsen", "ahmado");

  const resualt = await newUser.save();

  console.log("resualt : ", resualt);

  res.send({ resualt });
}

module.exports = {
  LoginUser,
};
