const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const anotacaoController = require('./controllers/anotacao/anotacaoController');
const informationController = require("./controllers/information/informationController");
const linksController = require('./controllers/links/linksController');
const Anotacao = require('./controllers/anotacao/Anotacao');
const Information = require('./controllers/information/Information');
const Links = require('./controllers/links/Links')


//conecxão com o banco
connection.authenticate().then(()=>{
    console.log(":D");
}).catch((err) =>{
    console.log(err);
})

//Config EJS
app.set('view engine','ejs');
app.use(express.static('public'));

//Config BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});

app.use("/", anotacaoController);
app.use("/", informationController);
app.use("/", linksController);


//servidor
app.listen(8182, function (err) {
    console.log("servidor aberto")
})