const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Information = require('./database/Information');
const Anotacao = require('./database/Anotacao');
const Links = require('./database/Links');


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

//pages
app.get('/home', (req, res) => {
    Anotacao.findAll({raw: true}).then(anotacao => {
        res.render("index",{
            anotacao: anotacao
        });
    });
});
app.get('/information', (req, res) => {
    Information.findAll({raw: true}).then(information => {
        res.render("saveT" ,{
        information: information
        });
    });
});
app.get('/savelinks', (req, res) => {
    Links.findAll({raw: true}).then(link => {
        res.render("saveL", {
            link: link
        });
    });
});

//saving in datebase
app.post('/saveAnotacao', (req, res) => {
    var titulo1 = req.body.titulo;
    var anotacao1 = req.body.anotacao;
    Anotacao.create({
    titulo: titulo1,
    anotacao: anotacao1
    }).then(()=> {
        res.redirect('/home');
    });
});

app.post('/saveInformation', (req, res) => {
    var titulo1 = req.body.tituloInformacao;
    var informa1 = req.body.information;
    Information.create({
        tituloIformation: titulo1,
        information: informa1
    }).then(()=>{
        res.redirect('/information');
    });
});

app.post('/saveLink', (req, res) => {
    var tituloLinks = req.body.tituloLink;
    var link = req.body.link;
    Links.create({
        tituloLinks :  tituloLinks,
        links: link
    }).then(() => {
        res.redirect('/savelinks');
    }).catch((err) => {
        console.log(err);
    })
})

//servidor
app.listen(8182, function (err) {
    console.log("servidor aberto")
})