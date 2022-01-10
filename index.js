const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/equipes', controllers.equipes);
app.use('/usuarios', controllers.usuarios);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`));
