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

module.exports = { pool };
