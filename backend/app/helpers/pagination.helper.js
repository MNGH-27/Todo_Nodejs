//there are two way to implement pagination
/**
 * * 1 _ is as helper which we will code it here
 * * 2 _ is that we use it directly in the model that we need pagination
 *
 * ! both of them is correct and it depend on structure of code that we are developing it
 */

const db = require("./../database/mysql.database");

function pagination({
  page = 1,
  rowPerPage = 10,
  tableName,
  conditionArray = [],
}) {
  //count number of data that we have showed to user
  const offset = (page - 1) * rowPerPage;
  const limit = rowPerPage;

  //create condition string , check length of condition Array
  let condition = conditionArray.length === 0 ? "" : "WHERE ";
  //loop on condition array to create condition string
  conditionArray.forEach((singleCondition) => {
    //add each item to string
    condition += `${singleCondition.title}=${singleCondition.value} `;
  });

  return Promise.all([
    asyncGetCountQuery(tableName, condition),
    asyncGetDataQuery(tableName, condition, offset, limit),
  ]).then(([countResults, dataResults]) => {
    const totalRows = countResults[0].totalRows;
    const totalPages = Math.ceil(totalRows / rowPerPage);

    //convert RowDataPacket to array =>
    const dataInArray = Object.values(dataResults).map((row) =>
      Object.assign({}, row)
    );

    return {
      meta: {
        currentPage: page,
        totalPages,
        totalRows,
        limit,
      },
      data: dataInArray,
    };
  });
}

const asyncGetCountQuery = async (tableName, condition) => {
  try {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT COUNT(*) AS totalRows FROM ${tableName} ${condition}`,
        (err, res) => {
          //check if error in saving data in mySql
          if (err) {
            console.log("error: ", err);
            return reject(err);
          }

          resolve({ ...res });
        }
      );
    });
  } catch (error) {
    console.log("error in get count Query");
  }
};

const asyncGetDataQuery = (tableName, condition, offset, limit) => {
  try {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM ${tableName} ${condition} LIMIT ${offset}, ${limit}`,
        (err, res) => {
          //check if error in saving data in mySql
          if (err) {
            console.log("error: ", err);
            return reject(err);
          }

          resolve({ ...res });
        }
      );
    });
  } catch (error) {
    console.log("error in get count Query");
  }
};

module.exports = pagination;
