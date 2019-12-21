const express = require("express");
const cors = require("cors");

const app = express();
const db = require("../database/index");
const port = 3380;

const test = `select * from sdcGammazon where id = 5;`;
app.use(cors());

//mongo
app.get("/", (req, res) => {
  db.psqlGet(test, (err, results) => {
    res.send(results.rows[0]);
  });
});

app.listen(port, console.log(`listening on port ${port}!`));
