const db = require("./mongoconfig.js");

const mongoGet = callback => {
  db.mongoDatabase.findOne({ primaryKey: 5 }, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(err, results);
    }
  });
};

module.exports = { mongoGet };
