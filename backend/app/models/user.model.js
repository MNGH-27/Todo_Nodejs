const db = require("./../database/mysql.database");
class User {
  //add values to constructor
  constructor(firstName, lastName, password, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
  }

  async save() {
    const sql = `
     INSERT INTO user (
        firstName,
        lastName,
        password,
        email
     )
     VALUES(
        "${this.firstName}",
        "${this.lastName}",
        "${this.password}",
        "${this.email}"
     )
    `;

    return await db.execute(sql);
  }

  static findAll() {}
}

module.exports = User;
