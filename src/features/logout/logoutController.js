const logoutService = require('./logoutService');

module.exports = {

    async handle(req, res) {

        const id = req.sub_id;
        const token = req.token;

        const message = await logoutService.execute(id, token);

        return res.status(200).json({ message: message});
    }
};