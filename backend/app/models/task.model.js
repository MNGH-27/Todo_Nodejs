const db = require("./../database/mysql.database");
class Task {
  //add values to constructor
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  async save(newTask) {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO todo SET ?", newTask, (err, res) => {
        //check if error in saving data in mySql
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }

        //there is no any error in saving data in mySql
        console.log("created tutorial: ", { id: res.insertId, ...newTask });
        resolve({ id: res.insertId, ...newTask });
      });
    });
  }

  async getAllTaskOfUser(user_id) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM todo WHERE user_id = ? ",
        [user_id],
        (err, res) => {
          //check if error in saving data in mySql
          if (err) {
            console.log("error: ", err);
            return reject(err);
          }

          //there is no any error in saving data in mySql
          console.log("created tutorial: ", [...res]);
          resolve([...res]);
        }
      );
    });
  }
}

module.exports = Task;
