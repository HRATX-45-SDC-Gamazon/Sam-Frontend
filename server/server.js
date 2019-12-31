const express = require("express");
const cors = require("cors");
const app = express();
const db = require("../database/postgres.js");
const db2 = require("../database/mongo.js");
const port = 3380;

// ! LOAD BALANCING
let toggle = true;
let pToggle = true;
let putToggle = true;

app.use(cors());

// ! GET ROUTES
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

// psql backup
app.get("/", (req, res) => {
  db.psqlGet((err, results) => {
    res.send(results.rows[0]);
  });
});

// mongo backup
// app.get("/", (req, res) => {
//   db2.mongoGet((err, results) => {
//     res.send(results);
//   });
// });

// ! END GET ROUTES

// ! POST ROUTES
app.post("/", (req, res) => {
  pToggle
    ? db.psqlPost((err, results) => {
        toggle = !toggle;
        res.send(results);
      })
    : db2.mongoPost((err, results) => {
        toggle = !toggle;
        res.send(results);
      });
});

// psql backup
// app.post("/", (req, res) => {
//   db.psqlPost((err, results) => {
//     res.send(results);
//   });
// });

// mongo backup
// app.post("/", (req, res) => {
//   db2.mongoPost((err, results) => {
//     res.send(results);
//   });
// });

// ! END POST ROUTES

// ! PUT ROUTES
app.put("/", (req, res) => {
  putToggle
    ? db.psqlPut((err, results) => {
        toggle = !toggle;
        res.send(results);
      })
    : db2.mongoPut((err, results) => {
        toggle = !toggle;
        res.send(results);
      });
});

// psql backup
// app.put("/", (req, res) => {
//   db.psqlPut((err, results) => {
//     res.send(results);
//   });
// });

// mongo backup
// app.put("/", (req, res) => {
//   db2.mongoPut((err, results) => {
//     res.send(results);
//   });
// });

// ! END PUT ROUTES

// ! DELETE ROUTES
// psql backup
// app.delete("/", (req, res) => {
//   db.psqlDelete((err, results) => {
//     res.send(results);
//   });
// });

// mongo backup
// app.delete("/", (req, res) => {
//   db2.mongoDelete((err, results) => {
//     res.send(results);
//   });
// });

// ! END DELETE ROUTES
app.listen(port, console.log(`listening on port ${port}!`));
