//Conexao com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'jonasone',
  password : '123456',
  database : 'jbf'
});

connection.connect(function (err) {
    if (err) console.error('Erro ao realizar a conexao com o BD: ' + err.stack); return;
});
 
connection.query("INSERT INTO users(nome, email) VALUES ('Kemily', 'kemilyboer@hotmail.com')", function(err, result){
    if(!err) {
        console.log('Usuario cadastrado com sucesso!');
    } else {
        console.log('Erro ao cadastrar o usuario!' + err.stack);
    }
})

connection.end();

