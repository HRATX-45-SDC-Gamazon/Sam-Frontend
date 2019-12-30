const express = require("express");
const cors = require("cors");
const app = express();
const db = require("../database/postgres.js");
const db2 = require("../database/mongo.js");
let toggle = true;
const port = 3380;

// const test = `select * from sdcGammazon where id = 5;`;
app.use(cors());

app.get("/", (req, res) => {
  toggle
    ? db.psqlGet((err, results) => {
        toggle = !toggle;
        res.send(results.rows[0]);
      })
    : db2.mongoGet((err, results) => {
        toggle = !toggle;
        res.send(results);
      });
});

app.listen(port, console.log(`listening on port ${port}!`));

// psql backup
// app.get("/", (req, res) => {
//   db.psqlGet((err, results) => {
//     res.send(results.rows[0]);
//   });
// });

//mongo backup
// app.get("/", (req, res) => {
//   db2.mongoGet((err, results) => {
//     res.send(results);
//   });
// });

// app.get("/", (req, res) => {
//   toggle
//     ? db.psqlGet((err, results) => {
//         toggle = !toggle;
//         res.send(results.rows[0]);
//       })
//     : db2.mongoGet((err, results) => {
//         toggle = !toggle;
//         res.send(results);
//       });
// });
