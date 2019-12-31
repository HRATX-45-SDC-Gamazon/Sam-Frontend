const mongo = require("mongodb").MongoClient;
const pool = require("./psqlconfig.js").pool;

const psqlGet = callback => {
  pool.query(`select * from sdcGammazon where id = 5;`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(err, results);
    }
  });
};

const psqlPost = callback => {
  pool.query(
    `insert into sdcGammazon ("name", price, stock, "group")
  VALUES ('Ish is silly', '34.99', 7444, 'Tim Sanderson');`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    }
  );
};

const psqlPut = callback => {
  pool.query(
    `update sdcGammazon set stock = 7444 where stock = 744599999;`,
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    }
  );
};

const psqlDelete = callback => {
  pool.query(`delete from sdcGammazon where stock = 7444;`, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(err, results);
    }
  });
};

module.exports = { psqlGet, psqlPost, psqlPut, psqlDelete };
