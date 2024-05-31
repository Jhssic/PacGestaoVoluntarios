const express = require("express");
const  routes = require("./routes/routes.js");


let server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/', routes);

server.listen(3000, function () {
console.log("Servidor rodando na porta 3000")

});