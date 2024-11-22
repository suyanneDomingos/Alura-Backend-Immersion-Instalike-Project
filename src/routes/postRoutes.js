import express from 'express';
import multer from "multer"; // Importa o Multer para lidar com uploads de arquivos
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost  } from '../controllers/postControllers.js';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
const routes = (app) => {
    app.use(express.json()); // Permite que o servidor receba e entenda dados no formato JSON

    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost)
      app.post("/upload", upload.single("imagem"), uploadImagem); // Chama a função controladora para processamento da imagem
app.put("/upload/:id", atualizaNovoPost)
}

export default routes;
