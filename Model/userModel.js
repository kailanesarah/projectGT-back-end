const { DataTypes } = require("sequelize");
const connection = require("../DataBase/connection");

const User = connection.define(
  "User",
  {
    USER_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    USER_NOME: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    USER_IDADE: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    USER_EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    USER_SENHA: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "TB_USERS",
    timestamps: false,
  }
);

module.exports = User;
