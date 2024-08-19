const Category = require("../Model/categoryModel");

//Lógica dos cruds
class CategoryController {

  #Listar
  async findAll(req, res) {
    try {
      const category = await Category.findAll();

      if (!category) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }

      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar Categorias" });
    }
  }

  #adicionar
  async add(req, res) {
    const { name } = req.body;

    try {
      const category = await Category.findOne({ where: { CAT_NAME: name } });

      if (category) {
        res.status(422).json({ errors: ["Essa categoria já existe"] });
        return;
      }

      const new_category = await Category.create({
        CAT_NAME: name,
      });

      res.status(201).json({
        _id: new_category.CAT_ID,
      });
    } catch (error) {
      console.error("Erro ao registrar categoria:" + error);
      res
        .status(500)
        .json({ errors: ["Erro no servidor, tente novamente mais tarde."] });
    }
  }

  #listarId

  async findById(req, res) {
    try {
      const { id: CAT_ID } = req.params;
      const category = await Category.findByPk(CAT_ID, {});

      if (!category) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      res.json(category);
    } catch (error) {
      res.status(500).json({
        message: "Erro ao listar categorias por id" + error,
      });
    }
  }

  #deletar
  async delete(req, res) {
    try {
      const { id: CAT_ID } = req.params;

      const resultado = await Category.destroy({ where: { CAT_ID } });

      res.json({ message: "Categoria deletada com sucesso" });
    } catch (error) {
      res.status(500).json({
        message: "CONTROLLER: Erro ao deletar categoria: " + error.message,
      });
    }
  }

  #atualizar
  async update(req, res) {
    try {
      const { name: CAT_NAME } = req.body;
      const { id: CAT_ID } = req.params;

      if (!CAT_NAME) {
        return res
          .status(400)
          .json({ errors: "Todos os campos são necessários" });
      }

      const updatedData = {
        CAT_NAME,
      };

      const [updated] = await Category.update(updatedData, {
        where: { CAT_ID },
      });

      if (updated) {
        const updatedCategory = await Category.findByPk(CAT_ID, {
          // attributes: { exclude: ['USER_SENHA', 'USER_ID'] }
        });

        return res.json(updatedCategory);
      } else {
        return res.status(404).json({ message: "Informações desatualizadas" });
      }
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ message: "Erro ao atualizar categoria" });
    }
  }
}

module.exports = CategoryController;
