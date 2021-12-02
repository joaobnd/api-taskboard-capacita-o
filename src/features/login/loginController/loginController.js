const loginService = require('../loginService/loginService');

module.exports = {
    async handle(req, res) {

        const { email, password } = req.body;

        const token = await loginService.execute(email, password);

        return res.status(201).json({
            token: token
        });
    }
}