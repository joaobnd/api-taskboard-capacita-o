const JWT = require('jsonwebtoken');
require('dotenv/config');

module.exports = {

    generateToken(params = {}) {
        return JWT.sign(
            params,
            process.env.JWT_SECRET,
            { expiresIn: 86400}
        )
    }
};