const db = require("./../database/mysql.database");
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  async save() {
    // const date = new Date();
    // // const createdAt = `${date.getFullYear()}-${
    // //   date.getMonth() + 1
    // // }-${date.getDay()}`;

    const sql = `
     INSERT INTO user (
        firstName,
        lastName,
        password
     )
     VALUES(
        "${this.firstName}",
        "${this.lastName}",
        123
     )
    `;

    return await db.execute(sql);
  }

  static findAll() {}
}

module.exports = User;
