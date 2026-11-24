const express = require ("express");
const connection = require("./database/connection");
const app = express();
const PORT = 3000;

app.use(express.static("frontend"));
app.listen(PORT,() =>{
    console.log('Servidor executando em http://localhost:3000{port}');});
app.get("/contatos", (req, res) => { res.send("Aqui serão apresentados os contatos."); });