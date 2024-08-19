const User = require("../Model/userModel")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.APP_KEY_SECRET;


class UsersController {

  async findAll(req, res) {
    try {
      const user = await User.findAll()

      if (!user) {
        return res.status(404).json({ error: "Usuários não encontrados" });
      }

      res.status(200).json(user);

    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao listar usuários" });
    }
  }

  async findById(req, res) {
    try {
      const { id: USER_ID } = req.params;
      const user = await User.findByPk(USER_ID, {
        attributes: { exclude: ['USER_SENHA'] }
      });

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: "Erro ao listar usuários por id" + error,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id: USER_ID } = req.params;

      const resultado = await User.destroy({ where: { USER_ID } });

      res.json({ message: "Usuário deletado com sucesso" });

    } catch (error) {
      res.status(500).json({
        message: "CONTROLLER: Erro ao deletar usuário: " + error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const { name: USER_NOME, age: USER_IDADE, email: USER_EMAIL, password: USER_SENHA } = req.body;
      const { id: USER_ID } = req.params;

      if (!USER_NOME || !USER_IDADE || !USER_EMAIL) {
        return res.status(400).json({ errors: "Todos os campos são necessários" });
      }

      const updatedData = {
        USER_NOME,
        USER_IDADE,
        USER_EMAIL,
        USER_SENHA
      };

      const [updated] = await User.update(updatedData, { where: { USER_ID } });

      if (updated) {
        const updatedUser = await User.findByPk(USER_ID, {
          // attributes: { exclude: ['USER_SENHA', 'USER_ID'] }
        });

        return res.json(updatedUser);
      } else {
        return res.status(404).json({ message: "Informações desatualizadas" });
      }

    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ message: "Erro ao atualizar usuário" });
    }
  }


  async login(req, res) {
    const { email: USER_EMAIL, password } = req.body;

    try {
      const user = await User.findOne({ where: { USER_EMAIL } });

      if (!user) {
        return res.status(404).json({ errors: ["Usuário não existente"] });
      }

      if (password === user.USER_SENHA) {
        return res.status(422).json({ errors: ["Senha errada"] });
      }

      res.status(200).json({
        id: user.USER_ID,
        token: generateToken(user.USER_ID),
      });
    } catch (error) {
      res.status(500).json({ errors: ["Erro no servidor"] });
    }
  }

  async getCurrentUser(req, res) {
    const user = req.user;

    res.status(200).json(user);
  }

  async add(req, res) {
    const { name, age, email, password } = req.body;

    try {
      const user = await User.findOne({ where: { USER_EMAIL: email } });

      if (user) {
        res.status(422).json({ errors: ["Email já existente"] });
        return;
      }

      const newUser = await User.create({
        USER_NOME: name,
        USER_IDADE: age,
        USER_EMAIL: email,
        USER_SENHA: password,
      });



      res.status(201).json({
        _id: newUser.USER_ID,
        token: await generateToken(newUser.USER_ID),
      });

    } catch (error) {
      console.error("Erro ao registrar o usuário:", error);
      res.status(500).json({ errors: ["Erro no servidor, tente novamente mais tarde."] });
    }
  }
}

const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

module.exports = UsersController;
