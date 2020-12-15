### Schema sets up database
DROP DATABASE IF EXISTS BobsBurgers_db;
CREATE DATABASE BobsBurgers_db;
USE BobsBurgers_db;
-- creates table
CREATE TABLE Burgers(
	id int NOT NULL AUTO_INCREMENT,
	type varchar(255),
	devour BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);