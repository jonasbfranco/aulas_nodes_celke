const express = require("express");

const app = express();

//Conexao com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'jonasone',
  password : '123456',
  database : 'jbf'
});

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 

connection.query('SELECT * FROM users', function(err, rows, fields) {
    if(!err) {
        console.log('Resultado: ', rows);
    } else {
        console.log('Erro ao realizar a consulta');
    }
});

connection.end();


app.get("/", function(req, res){
    //res.send("Gerenciador Financeiro");
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/sobre-empresa", function(req, res){
    //res.send("Pagina sobre a Empresa");
    res.sendFile(__dirname + "/src/sobre-empresa.html");
});

app.get("/blog", function(req, res){
    res.send("Pagina do Blog");
});

app.get("/contato", function(req, res){
    res.send("Pagina de Contato");
});

//localhost:8080
app.listen(8080);