import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    try {
        const client = new MongoClient(stringConexao);
        await client.connect();
        console.log('Conectado ao cluster do banco de dados');
        return client;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}