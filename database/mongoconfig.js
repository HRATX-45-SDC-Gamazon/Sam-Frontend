const mongo = require("mongodb").Db;
const Client = require("mongodb").MongoClient;

let myDB = new Client("mongodb://localhost:27017/localDB6", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

myDB.connect(console.log("connected to mongotest"));
let mongoDatabase = myDB.db("localDB6").collection("localConn6");

module.exports = { mongoDatabase };
