const db = require("./mongoconfig.js");

const mongoGet = callback => {
  db.mongoDatabase.findOne({ stock: 1 }, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(err, results);
    }
  });
};

const mongoPost = callback => {
  db.mongoDatabase.insertOne(
    {
      name: "Ish is silly",
      price: "34.99",
      stock: 7444,
      group: "Tim Sanderson"
    },
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    }
  );
};

const mongoPut = callback => {
  db.mongoDatabase.updateOne(
    { stock: 744599999 },
    { $set: { stock: 7444 } },
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    }
  );
};

const mongoDelete = callback => {
  db.mongoDatabase.deleteOne({ stock: 7444 }, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(err, results);
    }
  });
};

module.exports = { mongoGet, mongoPost, mongoPut, mongoDelete };
