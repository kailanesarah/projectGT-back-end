CREATE DATABASE PROJECT_BACKEND;

USE PROJECT_BACKEND;

CREATE TABLE TB_USERS (
USER_ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
USER_NOME VARCHAR(30) NOT NULL,
USER_IDADE INT NOT NULL,
USER_EMAIL VARCHAR(30) UNIQUE NOT NULL,
USER_SENHA VARCHAR(10) NOT NULL);

DESCRIBE TB_USERS;

CREATE TABLE TB_CATEGORY(
CAT_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
CAT_NAME VARCHAR(30) NOT NULL
);

DESCRIBE TB_CATEGORY;

CREATE TABLE TB_PRODUCTS (
  PRO_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  PRO_NAME VARCHAR(30) NOT NULL,
  PRO_PRICE FLOAT NOT NULL,
  PRO_DESCRIPTION VARCHAR(100) NOT NULL,
  CAT_ID INT NOT NULL,  
  FOREIGN KEY (CAT_ID) REFERENCES TB_CATEGORY(CAT_ID)  
);

DESCRIBE TB_PRODUCTS;

CREATE TABLE TB_ORDER (
  ORD_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  ORD_AMOUNT INT NOT NULL,
  USER_ID INT NOT NULL,  
  FOREIGN KEY (USER_ID) REFERENCES TB_USERS(USER_ID) ,
  PRO_ID INT NOT NULL,  
  FOREIGN KEY (PRO_ID) REFERENCES TB_PRODUCTS(PRO_ID)  
);

DESCRIBE TB_ORDER;
