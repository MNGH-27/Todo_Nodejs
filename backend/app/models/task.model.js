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

  async removeSingleTaskOfUser(user_id, task_id) {
    return new Promise((resolve, reject) => {
      db.query(
        "DELETE FROM todo WHERE user_id = ? AND id = ? ",
        [user_id, task_id],
        (err, res) => {
          //check if error while removing single task
          if (err) {
            console.log("error in delete task : ", err);
            return reject(err);
          }

          //task deleted successfully
          console.log("deleted task : ", { ...res });
          resolve({ ...res });
        }
      );
    });
  }

  async editSingleTask(task_id, title, description, isComplete) {
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE todo SET title = ?, description = ?, is_complete = ? WHERE id = ?",
        [title, description, isComplete, task_id],
        (err, res) => {
          console.log("come to this part");
          //check if error while editing new task
          if (err) {
            console.log("error in edit task : ", err);
            return reject(err);
          }

          //task edited successfully
          console.log("edited task : ", { ...res });
          return resolve({ ...res });
        }
      );
    });
  }
}

module.exports = Task;
