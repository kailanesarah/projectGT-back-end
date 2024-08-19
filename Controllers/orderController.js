const Order = require("../Model/orderModel");

//Lógica dos cruds
class OrderController {

  #adicionar
  async add(req, res) {
    const { amount, user_id, pro_id } = req.body;

    try {
      const newOrder = await Order.create({
        ORD_AMOUNT: amount,
        USER_ID: user_id,
        PRO_ID: pro_id,
      });

      res.status(201).json({
        _id: newOrder.ORD_ID,
      });
    } catch (error) {
      console.error("Erro ao registrar o pedido:" + error);
      res
        .status(500)
        .json({ errors: ["Erro no servidor, tente novamente mais tarde."] });
    }
  }

  #listar
  async findAll(req, res) {
    try {
      const order = await Order.findAll();

      if (!order) {
        return res.status(404).json({ error: "Pedido não encontrado" });
      }

      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar pedidos" });
    }
  }
  async findById(req, res) {
    try {
      const { id: ORD_ID } = req.params;
      const order = await Order.findByPk(ORD_ID, {});

      if (!order) {
        return res.status(404).json({ error: "`Pedido não encontrado" });
      }

      res.json(order);
    } catch (error) {
      res.status(500).json({
        message: "Erro ao listar pedidos por id" + error,
      });
    }
  }

  #deletar
  async delete(req, res) {
    try {
      const { id: ORD_ID } = req.params;

      const resultado = await Order.destroy({ where: { ORD_ID } });

      res.json({ message: "Pedido deletado com sucesso" });
    } catch (error) {
      res.status(500).json({
        message: "CONTROLLER: Erro ao deletar pedido: " + error.message,
      });
    }
  }

  #atualizar
  async update(req, res) {
    try {
      const { amount: ORD_AMOUNT, user_id: USER_ID, pro_id: PRO_ID } = req.body;
      const { id: ORD_ID } = req.params;

      if (!ORD_AMOUNT || !USER_ID || !PRO_ID) {
        return res
          .status(400)
          .json({ errors: "Todos os campos são necessários" });
      }

      const updatedData = {
        ORD_AMOUNT,
        USER_ID,
        PRO_ID,
      };

      const [updated] = await Order.update(updatedData, { where: { ORD_ID } });

      if (updated) {
        const updatedOrder = await Order.findByPk(ORD_ID, {});

        return res.json(updatedOrder);
      } else {
        return res.status(404).json({ message: "Informações desatualizadas" });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao atualizar pedido " + error });
    }
  }
}

module.exports = OrderController;
