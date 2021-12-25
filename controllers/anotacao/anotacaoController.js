const express = require('express');
const router = express.Router();
const Anotacao = require("../anotacao/Anotacao");

router.get('/home', (req, res) => {
    Anotacao.findAll({raw: true}).then(anotacao => {
        res.render("index",{
            anotacao: anotacao
        });
    });
});

router.post('/saveAnotacao', (req, res) => {
    var titulo1 = req.body.titulo;
    var anotacao1 = req.body.anotacao;
    Anotacao.create({
    titulo: titulo1,
    anotacao: anotacao1
    }).then(()=> {
        res.redirect('/home');
    });
});

router.post('/anotacao/delete', (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        if(!isNaN(id)) {
            Anotacao.destroy({ 
                where: { id: id }
            }).then(() => {
                res.redirect('/home');
            })
        }else{
            res.redirect('/home');
        }
    }else{
        res.redirect('/home');
    }
});

module.exports = router;
