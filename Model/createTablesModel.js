const modelUser = require("./userModel");
const ModelProduct = require("./productsModel");
const modelCategory = require("./categoryModel");
const ModelOrder = require("./orderModel");

Promise.all([
  modelUser.sync({ force: true }),
  modelCategory.sync({ force: true }),
  ModelProduct.sync({ force: true }),
  ModelOrder.sync({ force: true })
])
  .then(() => {
    console.log("Tabelas criadas com sucesso");
  })
  .catch((error) => {
    console.error("Erro ao criar tabelas:"+ error);
  });