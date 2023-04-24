//model
const User = require("./../../models/user.model");

//helper
const filterObject = require("./../../helpers/fieldFilter.helper");

async function GetUser(req, res) {
  //generate class of user
  const user = new User();

  try {
    //get first item of return data form database
    const singleUser = await user.GetUserWithId(req.user.id);

    //check if we have result in login
    if (singleUser.length === 0) {
      //singleUser is empty =>  return error as we dont have user with this id
      return res.status(400).send({
        message: "there is no any user with this id",
      });
    } else {
      //there is user with this data return user's data

      //fitler returned object and remove some field => [password]
      const resultFilter = filterObject(singleUser[0], ["password"], "remove");

      //return data
      return res.status(200).send({ ...resultFilter });
    }
  } catch (error) {
    //there was error while saving and finding user , return error
    return res.status(500).send({
      message:
        error.message || "Some error occurred while creating the Tutorial.",
    });
  }
}

module.exports = {
  GetUser,
};
