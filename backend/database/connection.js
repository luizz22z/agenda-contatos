const mysql = require("mysql12");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "agenda_contatos"
})

connection.connect( (erro) => {
    if (erro) {
        console.error("Erro ao conectar ao banco de dados:",
erro);
    return;
    }

console.log("Conectado ao banco ed dados agenda_contatos.");
});