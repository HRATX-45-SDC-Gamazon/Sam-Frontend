const mongo = require("mongodb").MongoClient;
const pool = require("./psqlconfig.js").pool;

const psqlGet = callback => {
  pool.query(`select * from sdcGammazon where id = 5;`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(err, results);
    }
  });
};

// const psqlGet = (line, callback) => {
//   pool.pool.query(line, (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       callback(err, results);
//     }
//   });
// };

module.exports = { psqlGet };
