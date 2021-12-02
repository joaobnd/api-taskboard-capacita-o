const mongoose = require('mongoose');
require('dotenv/config');

module.exports = () => {

    const DB_URL = process.env.DB_URL;

    mongoose.connection.on("connected", () => {
        console.log("conectado com o banco de dados!")
    });

    mongoose.connection.on("error", (err) => {
        console.log("erro na conexão com banco de dados" + err)
    });

    mongoose.connect(DB_URL, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}