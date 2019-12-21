const faker = require("faker");
const Promise = require("bluebird");
const { Pool } = require("pg");
const mongo = require("mongodb").MongoClient;

// postgres
const pool = new Pool({
  user: "samlawson",
  host: "localhost",
  database: "mydb",
  password: "password",
  port: 5432
});

pool.connect(console.log("connected to PSQL!"));

const psqlGet = (line, callback) => {
  pool.query(line, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(err, results);
    }
  });
};

// mongo
// class Connection {
//   constructor() {
//     mongo.connect("mongodb://localhost:27017/localDB6.localConn6");
//   }
// }

module.exports = { psqlGet };
