const mysql = require('mysql2/promise');

async function connect() {
    if (global.connection && global.connection.state !==  'disconnected')
        return global.connection
 
    const conexao = await mysql.createConnection("mysql://root:@localhost:3306/Voluntarios")
 
    console.log("Conectado a base")
    global.connection = conexao;
    return conexao;
}
 
module.exports = connect;