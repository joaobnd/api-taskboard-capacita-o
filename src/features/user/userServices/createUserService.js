const User = require('../User');
const bcrypt = require('../../../utils/bcrypt');

module.exports = {
    
    async execute(name, email, password) {

        if(!name || !email || !password) {
            throw new Error('Faltou dados!')
        };

        if(password.lenght < 8) {
            throw new Error('Senha muito pequena!')
        };

        const encryptedPassword = await bcrypt.encryptPassword(password);

        const alreadyExists = await User.findOne({ email });

        if(alreadyExists) {
            throw new Error('Usuário ja existe no banco de dados!')
        };

        const user = await User.create({ name, email, "password": encryptedPassword });
        user.password = undefined;
        return (user);

    }
};