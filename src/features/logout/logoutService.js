const User = require('../user/User');

module.exports = {
    async execute(id, token) {

        const user = await User.findById(id);

        if(!user) {
            throw new Error('Usuário não encontrado!')
        };

        const valid = (token === user.token);

        if(!valid) {
            throw new Error('Token inválido')
        };

        user.token = undefined;
        await user.save();

        return "logout realizado!";
    }
}