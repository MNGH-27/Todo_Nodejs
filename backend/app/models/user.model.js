const db = require("./../database/mysql.database");
class User {
  //add values to constructor
  constructor(firstName, lastName, password, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
  }

  async save(newUser) {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO user SET ?", newUser, (err, res) => {
        //check if error in saving data in mySql
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }

        //there is no any error in saving data in mySql
        console.log("created tutorial: ", { id: res.insertId, ...newUser });
        resolve({ id: res.insertId, ...newUser });
      });
    });
  }

  async findAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user", (err, res) => {
        //check if error in saving data in mySql
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }
        //return data as resolve
        resolve({ res });
      });
    });
  }

  async findUserWithEmail(email) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM user WHERE email = ? ", email, (err, res) => {
        if (err) {
          console.log("error : ", err);
          return reject(err);
        }

        return resolve(res);
      });
    });
  }

  static loginUser(email, password) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM user WHERE email = ? & password = ?",
        [email, password],
        (err, res) => {
          //there was error in login
          if (err) {
            console.log("err in login user :=> ", err);
            return reject(err);
          }

          //login user successfully
          return resolve(res);
        }
      );
    });
  }
}

module.exports = User;
