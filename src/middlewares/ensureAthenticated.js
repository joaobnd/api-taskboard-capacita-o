const jwt = require('jsonwebtoken');
const User = require('../features/user/User');
require('dotenv/config');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).end("token não fornecido!")
  };

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).end('Apenas o bearer foi fornecido!');
  };

  const [ scheme, token ] = parts;

  if (!/Bearer$/i.test(scheme)) {
    return res.status(401).end("token mal formatado!")
  };

  jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
    if (error) {
      return res.status(401).end("token inválido!")
  };

  req.sub_id = decoded.sub;
  req.token = token;
  next();
  });
}