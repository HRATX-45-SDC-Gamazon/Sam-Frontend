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
  primaryKey INT,
  "name" TEXT,
  price TEXT,
  stock INT,
  "group" TEXT
);

-- COPY sdcgammazon (primaryKey, "name", price, stock, "group")
-- FROM '/usr/csvs/2dataToSeed.csv'
-- DELIMITER ',' csv header;


-- scp -i "[full path to PEM file]" "[a csv full path]" ec2-user@ec2-52-15-181-244.us-east-2.compute.amazonaws.com:~/csvs


-- scp -i "/Users/samlawson/Desktop/SDC/key19.pem" "/Users/samlawson/Desktop/SDC/seedData/dataToSeedFirst.csv" ec2-user@ec2-52-15-181-244.us-east-2.compute.amazonaws.com:~/csvs
-- scp -i "/Users/samlawson/Desktop/SDC/key19.pem" "/Users/samlawson/Desktop/SDC/seedData/2dataToSeed.csv" ec2-user@ec2-52-15-181-244.us-east-2.compute.amazonaws.com:~/csvs
-- scp -i "/Users/samlawson/Desktop/SDC/key19.pem" "/Users/samlawson/Desktop/SDC/seedData/2dataToSeed.csv" "/Users/samlawson/Desktop/SDC/seedData/3dataToSeed.csv" ec2-user@ec2-52-15-181-244.us-east-2.compute.amazonaws.com:~/csvs


-- ssh -i "/Users/samlawson/Desktop/SDC/key19.pem" ec2-user@ec2-52-15-181-244.us-east-2.compute.amazonaws.com