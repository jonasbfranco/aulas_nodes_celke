const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Gerenciador Financeiro");
});

app.get("/sobre-empresa", function(req, res){
    res.send("Pagina sobre a Empresa");
});

app.get("/blog", function(req, res){
    res.send("Pagina do Blog");
});

app.get("/contato", function(req, res){
    res.send("Pagina de Contato");
});

//localhost:8080
app.listen(8080);