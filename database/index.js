const faker = require("faker");
const Promise = require("bluebird");
const { Pool } = require("pg");
const mongo = require("mongodb").MongoClient;

// postgres
const pool = new Pool({
  user: "samlawson",
  host: "localhost",
  database: "mydb",
  password: "password",
  port: 5432
});

// mongo
const insert = (item1, item2, item3, item4) =>
  mongo.connect(
    // "mongodb+srv://samlawson:mongoPassword@testmongo-trc4v.mongodb.net/testDB",
    (err, database) => {
      if (err) throw err;
      const test = database.db("testDB");
      test.collection("sdcGammazon1").insertOne(
        {
          name: item1,
          price: item2,
          stock: item3,
          group: item4
        },
        () => console.log("3")
      );
    }
  );

const insertLine = line => {
  pool.query(line); // postgres
  // insert(line.slice(74));
};

// const seedTheBeast = () => {
//   for (let i = 0; i < 10000; i++) {
//     let i = faker.commerce.productName();
//     let j = faker.commerce.price();
//     let x = faker.random.number();
//     let y = faker.commerce.department();
//     insertLine(
//       `INSERT INTO
//     sdcGammazon("name", price, stock, "group")
//     VALUES
//     ('${i}', '${j}', ${x}, '${y}');`
//     );
//     insert(i, j, x, y);
//   }
//   return 1;
// };
// seedTheBeast();

const seedTheBeast = () => {
  for (let i = 0; i < 10000; i++) {
    let i = faker.commerce.productName();
    let j = faker.commerce.price();
    let x = faker.random.number();
    let y = faker.commerce.department();
    pool.query(
      `INSERT INTO
    sdcGammazon("name", price, stock, "group")
    VALUES
    ('${i}', '${j}', ${x}, '${y}');`
    );

    insert(i, j, x, y);
  }
  return 1;
};
seedTheBeast();
