const mongo = require("mongodb").MongoClient;
const pool = require("./psqlconfig.js");

const psqlGet = (line, callback) => {
  pool.pool.query(line, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(err, results);
    }
  });
};

// const psqlGet = line => {
//   return pool.query(line, (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       callback(err, results);
//     }
//   });
// };

module.exports = { psqlGet };
