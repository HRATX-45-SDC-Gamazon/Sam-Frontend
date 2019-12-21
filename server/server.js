const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const db = require("../database/index.js");
const port = 3380;

const test = `select * from sdcGammazon where primarykey = 5;`;
app.use(cors());

// app.use(express.static(path.join(__dirname, "../public/dist")));
// app.use(express.json());

app.get("/", (req, res) => {
  db.psqlGet(test, (err, results) => {
    res.send(results.rows[0]);
  });
});

app.listen(port, console.log(`listening on port ${port}!`));
