const express = require('express');
require('dotenv/config');

const mongoose = require('mongoose');
const rotas = require('./rotas/routes')
const app = express();

mongoose.connect(`mongodb+srv://${process.env.USUARIO_MONGO}:${process.env.SENHA_MONGO}@reservaspantanal.sjaod.mongodb.net/reservas?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json());

app.use(rotas);

app.listen(3333);

// 