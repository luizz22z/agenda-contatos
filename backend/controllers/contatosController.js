const contatosModel = require("../models/contatosModel");

function listarContatos(req, res){
    contatosModel.listarContatos((erro, resultados) => {
    if (erro) {
        console.error(erro);
        returnres.status(500).json({erro: "Erro ao consultar os contatos."});
    }   
res.json(resultados);
});
}

module.exports ={listarContatos};