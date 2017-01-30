CREATE DATABASE burgers_db;

/*USE DATABASE burgers_db;*/

CREATE TABLE burgers (
id INT(6) AUTO_INCREMENT NOT NULL, 
burger_name VARCHAR(60) NULL, 
devoured BOOLEAN NOT NULL,
data TIMESTAMP null,
PRIMARY KEY (id)
);