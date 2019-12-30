const { Pool } = require("pg");

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
