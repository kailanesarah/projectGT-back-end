const { DataTypes } = require("sequelize");
const connection = require("../DataBase/connection");

const Category = connection.define('TB_CATEGORY', {
      CAT_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CAT_NAME: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  },
{
  tableName: "TB_CATEGORY"
});
  
  module.exports = Category;