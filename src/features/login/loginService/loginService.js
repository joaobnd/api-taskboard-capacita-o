const User = require('../../user/User');
const bcrypt = require('../../../utils/bcrypt');
const Auth = require('../../../utils/auth');

module.exports = {
    async execute(email, password) {

        const user = await User.findOne({ email });

        if(!user) {
            throw new Error('Usuario não encontrado!')
        };
        
        const pass_match = await bcrypt.comparePassword(password, user.password);

        if(!pass_match) {
            throw Error('Senha inválida!')
        };

        const token = Auth.generateToken({
            sub: user._id,
            iat: new Date().getTime()
        });

        user.token = token;
        await user.save();

        return (token);

    }
};