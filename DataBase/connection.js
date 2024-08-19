const Sequelize = require('sequelize');

const sequelize = new Sequelize("project_backend", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(error => {
    if (error instanceof Sequelize.DatabaseError) {
      console.error("Erro de banco de dados:", error);
    } else if (error instanceof Sequelize.ValidationError) {
      console.error("Erro de validação:", error);
    } else {
      console.error("Erro desconhecido:", error);
    }
  });

module.exports = sequelize;