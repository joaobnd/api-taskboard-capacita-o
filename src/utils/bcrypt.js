const bcrypt = require('bcryptjs');
require('dotenv/config');

module.exports = {

    async encryptPassword(password) {

        const encryptedPassword = await bcrypt.hash(
            password,
            parseInt(process.env.SALT_ROUNDS)
        );

        return encryptedPassword;
    },

    async comparePassword(password, encryptedPassword) {
        const valid = await bcrypt.compare(
            password,
            encryptedPassword
        );
        return valid;
    }
};