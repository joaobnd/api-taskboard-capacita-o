require('express-async-errors');
const express = require("express");
const app = express();
const router = require('../src/routes/router');

app.use(express.json());
app.use(router);

//middleware para capturar as exceções lançadas pela nossa aplicação
//é necessario a lib express-async-errors que deve estar no topo do nosso arquivo
app.use((error, req, res, next) => {
    if(error instanceof Error) {
        return res.status(400).json({
            error: error.message
        })
    } else {
        return res.status(500).json({
            error: "Internal Server Error"
        })
    }
});

module.exports = app;

