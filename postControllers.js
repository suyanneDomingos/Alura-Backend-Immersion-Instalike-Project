import { getTodosPosts } from "../models/postModel.js";
 

export async function listarPosts(req, res) {
    const posts = await getTodosPosts(); // Busca todos os posts no banco de dados
    res.status(200).json(posts); // Envia todos os posts como resposta em formato JSON
} 
