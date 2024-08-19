const Product = require("../Model/productsModel")

class ProductsController {

   async findAll(req, res) {
      const { limit = 12, page = 1 } = req.query;

      try {
         const limitValue = parseInt(limit);
         const pageValue = parseInt(page);

         const offset = (pageValue - 1) * limitValue;

         const products = await Product.findAll({
            limit: limitValue,
            offset: offset
         });

         if (!products || products.length === 0) {
            return res.status(404).json({ error: "Produtos não encontrados" });
         }

         res.status(200).json(products);
      } catch (error) {
         res.status(500).json({ message: "Erro ao listar os produtos: " + error.message });
      }
   }

   async findById(req, res) {
      try {
         const { id: PRO_ID } = req.params;
         const product = await Product.findByPk(PRO_ID, {
            // attributes: { exclude: ['USER_SENHA'] }
         });

         if (!product) {
            return res.status(404).json({ error: "Produto não encontrado" });
         }

         res.json(product);
      } catch (error) {
         res.status(500).json({
            message: "Erro ao listar produto por id" + error,
         });
      }
   }

   async add(req, res) {
      const {
         name: PRO_NAME,
         price: PRO_PRICE,
         description: PRO_DESCRIPTION,
         category: CAT_ID
      } = req.body;

      try {
         if (!PRO_NAME || !PRO_DESCRIPTION || !PRO_PRICE || !CAT_ID) {
            res.status(404).json({ erros: "Preencha todos os dados" })
         }

         const newProduct = await Product.create({
            PRO_NAME,
            PRO_PRICE,
            PRO_DESCRIPTION,
            CAT_ID
         });

         res.status(201).json(newProduct)

      } catch (error) {
         console.error("Erro ao registrar o produto:", error);
         res.status(500).json({ errors: ["Erro no servidor, tente novamente mais tarde."] });
      }
   }

   async delete(req, res) {
      try {
         const { id: PRO_ID } = req.params;

         await Product.destroy({ where: { PRO_ID } });

         res.json({ message: "Produto deletado com sucesso" });

      } catch (error) {
         res.status(500).json({
            message: "Erro ao deletar produto: " + error,
         });
      }
   }

   async update(req, res) {
      try {
         const {
            name: PRO_NAME,
            price: PRO_PRICE,
            description: PRO_DESCRIPTION,
            category: CAT_ID
         } = req.body;

         const { id: PRO_ID } = req.params;

         if (!PRO_NAME || !PRO_PRICE || !PRO_DESCRIPTION || !CAT_ID) {
            return res.status(400).json({ errors: "Todos os campos são necessários" });
         }

         const updatedData = {
            PRO_NAME,
            PRO_PRICE,
            PRO_DESCRIPTION,
            CAT_ID
         };

         const [updated] = await Product.update(updatedData, { where: { PRO_ID } });

         if (updated) {
            const updatedProduct = await Product.findByPk(PRO_ID, {
               attributes: { exclude: ['PRO_ID'] }
            });

            return res.json(updatedProduct);
         } else {
            return res.status(404).json({ message: "Informações desatualizadas" });
         }

      } catch (error) {
         console.error("Error updating user:", error);
         return res.status(500).json({ message: "Erro ao atualizar produto" });
      }
   }
}

module.exports = ProductsController;
