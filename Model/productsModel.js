const {DataTypes } = require("sequelize");
const connection = require("../DataBase/connection");
const Category = require("./categoryModel");

const Product = connection.define(
  "TB_PRODUCTS",
  {
    PRO_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PRO_NAME: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    PRO_PRICE: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    PRO_DESCIPTION: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    CAT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category, // Nome do modelo da categoria
        key: 'CAT_ID', // Chave estrangeira na tabela Category
      },
    },
  },
  { tableName: "TB_PRODUCTS" }
);

module.exports = Product;
