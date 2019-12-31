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


-- mysql
-- USE sdcDatabase;

-- CREATE TABLE IF NOT EXISTS sdcGammazon (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   primaryKey INT AUTO_INCREMENT,
--   name TEXT,
--   price TEXT,
--   stock INT,
--   `group` TEXT
-- );




-- psql
CREATE TABLE IF NOT EXISTS sdcGammazon (
  id SERIAL PRIMARY KEY,
  primaryKey INT = ,
  "name" TEXT,
  price TEXT,
  stock INT,
  "group" TEXT
);