const connect = require("../config/connection.js");

let voluntarios = {};


//GET
voluntarios.all = async function (req, res) {
    try {
        const con = await connect();
        const [rows] = await con.query("SELECT * FROM Voluntario;");
        res.json(rows);
    } catch (e){
        console.log("erro consulta ...", e);
        res.status(500).json({ error: "Internal Server Error" });

    }
};

//POST
voluntarios.create = async function(req,res) {
    try {
        let voluntario = req.body
        let sql = "INSERT INTO voluntario (cd_voluntario, nm_voluntario, email, endereco) values (?,?,?,?)"
        let values =[voluntario.cd_voluntario,voluntario.nm_voluntario,voluntario.email,voluntario.endereco];
        let result = await con.query(sql,values)
        res.send({
            status: "inserçao efetuada com sucesso",
            result : result
        })
    } catch (e) {
        console.log("erro consulta ...", e)
    }
}
module.exports = {voluntarios};