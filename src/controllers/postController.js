import { getTodosPosts , criarPost } from "../models/postModel.js";
import fs from "fs";

// Função para listar todos os posts
export async function listarPosts(req, res) {
    const posts = await getTodosPosts(); // Busca todos os posts no banco de dados
    res.status(200).json(posts); // Envia todos os posts como resposta em formato JSON
}

// Função para criar um novo post
export async function postarNovoPost(req, res) {
    const novoPost = req.body; // Garantindo que a variável novoPost esteja definida com os dados do corpo da requisição
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado); // Retorna o post criado
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" }); // Tratamento de erro
    }
}

export async function uploadImagem(req, res) {
    // Verificando se o arquivo foi enviado na requisição
    if (!req.file) {
        return res.status(400).json({ "Erro": "Nenhuma imagem enviada." });
    }

    // Definindo os dados do novo post
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,  // Nome da imagem enviada
        alt: ""
    };

try {
        // Criando o post com o nome da imagem
        const postCriado = await criarPost(novoPost);

        // Definindo o caminho da imagem atualizada
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;

        // Movendo a imagem para o diretório desejado
        fs.renameSync(req.file.path, imagemAtualizada);

        // Retornando o post com a imagem
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}
