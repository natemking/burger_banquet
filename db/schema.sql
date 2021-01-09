-- Drop database if exits
DROP DATABASE IF EXISTS burgers_DB;
-- Create database
CREATE DATABASE burgers_DB;

--Use database
USE burgers_DB;

-- Create table in database
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
 );

 