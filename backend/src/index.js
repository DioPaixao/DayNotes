//Dependencias
const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

require('dotenv').config();
require('./config/dbConfig');// Conexão com o banco de dados: mongodb

app.use(cors())
app.use(express.json());// Adicionando o recurso json do express
app.use(routes);

// Server
const PORT = 3333
app.listen(PORT, () => {
    console.log('Server running')
});