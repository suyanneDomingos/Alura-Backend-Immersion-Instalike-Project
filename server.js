import express from 'express'; // Importa o framework Express para criar a aplicação web
import routes from './src/routes/postRoutes.js';

const app = express(); // Cria uma instância do servidor Express
routes(app)
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000"); // Inicia o servidor na porta 3000
});