const db = require("./../database/mysql.database");
class User {
  //add values to constructor
  constructor(firstName, lastName, password, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
  }

  async save(newUser, result) {
    db.query("INSERT INTO user SET ?", newUser, (err, res) => {
      //check if error in saving data in mySql
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      //there is no any error in saving data in mySql
      console.log("created tutorial: ", { id: res.insertId, ...newUser });
      result(null, { id: res.insertId, ...newUser });
    });
  }

  async findAll(result) {
    db.query("SELECT * FROM user", (err, res) => {
      //check if error in saving data in mySql
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("list of users :", res);
      result(null, { res });
    });
  }

  async findUserWithEmail(email, result) {
    db.query("SELECT * FROM user WHERE email = ? ", email, (err, res) => {
      if (err) {
        console.log("error : ", err);
        return result(err, null);
      }

      console.log("list of user : ", res);
      return result(null, res);
    });
  }
}

module.exports = User;
