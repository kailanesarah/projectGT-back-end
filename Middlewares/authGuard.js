const jwt = require('jsonwebtoken');
const jwtSecret = process.env.APP_KEY_SECRET
const User = require("../Model/userModel")

async function AuthGuard(req, res, next) {
  const { token } = req.headers;

  try {
    if (token) {

      const verified = jwt.verify(token, jwtSecret)

      if (verified) {
        req.user = await User.findByPk(verified.id, {
          attributes: { exclude: ['password'] }
        });

        next()
      }

    } else {
      return res.status(401).send("Acesso não autorizado");
    }
  } catch (error) {
    return res.status(500).send("Erro interno do servidor");
  }
}

module.exports = AuthGuard;