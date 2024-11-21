import express from 'express';
import { listarPosts } from '../controllers/postControllers.js';

const routes = (app) => {
    app.use(express.json()); // Permite que o servidor receba e entenda dados no formato JSON

    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
}

export default routes;
