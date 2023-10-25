const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app = express()

// definindo handlebars como template engine
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

// pasta de arquivos estaticos como CSS, imagens
app.use(express.static("public"))

//trabalhar com dados no formato json
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

// rotas

app.get('/', (requisicao, resposta) => {
    resposta.render("home")
})

// conexão com mySQL

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nomysql",
    port: 3307
})

conn.connect((error) => {
    if (error) {
        console.log(error)
        return
    }

    console.log("Conectado ao MySQL!")

    app.listen(3000, () =>
    console.log("Sevidor rodando na porta 3000!"))
})