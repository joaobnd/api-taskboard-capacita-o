const createUserService = require('../userServices/createUserService');

module.exports = {
    async handle(req, res) {

        const { name, email, password } = req.body;

        const user = await createUserService.execute(name, email, password);

        return res.status(201).json({ "user": user});
        
    }
};