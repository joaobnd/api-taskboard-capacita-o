const app = require('./app');
const databaseConfig = require('../config/database');
const port = 3250;

async function startServer() {
    databaseConfig();
    app.listen(port, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log(`Servidor conectado na porta ${port}`)
    });
}

startServer();

module.exports = app;