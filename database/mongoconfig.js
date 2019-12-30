const mongo = require("mongodb").Db;
const Client = require("mongodb").MongoClient;

let myDB = new Client("mongodb://localhost:27017/localDB6", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

myDB.connect(console.log("connected to mongotest"));
let mongoDatabase = myDB.db("localDB6").collection("localConn6");

module.exports = { mongoDatabase };

// mongo
//   .connect(
//     "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }
//   )
//   .then(console.log("connected to mongo!"));

// module.exports = { mongodb };
