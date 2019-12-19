-- DROP DATABASE IF EXISTS sdcDatabase;
-- CREATE DATABASE IF NOT EXISTS sdcDatabase;

-- USE sdcDatabase;


-- CREATE TABLE IF NOT EXISTS theTableForSDC(
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   firstName TEXT,
--   lastName TEXT,
--   jobTitle TEXT,
--   zipCode INT,
--   country TEXT
-- );

-- DROP DATABASE IF EXISTS testToSeed;
-- CREATE DATABASE IF NOT EXISTS testToSeed;

-- USE testToSeed;


-- CREATE TABLE IF NOT EXISTS testTable(
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   firstName TEXT,
--   lastName TEXT,
--   jobTitle TEXT,
--   zipCode INT,
--   country TEXT
-- );



CREATE TABLE IF NOT EXISTS sdcGammazon (
  id SERIAL,
  "name" TEXT,
  price TEXT,
  stock INT,
  "group" TEXT
);


