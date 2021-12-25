const express = require('express');
const router = express.Router();
const Information = require("../information/Information");

router.get('/information', (req, res) => {
    Information.findAll({raw: true}).then(information => {
        res.render("saveT" ,{
        information: information
        });
    });
});

router.post('/saveInformation', (req, res) => {
    var titulo1 = req.body.tituloInformacao;
    var informa1 = req.body.information;
    Information.create({
        tituloIformation: titulo1,
        information: informa1
    }).then(()=>{
        res.redirect('/information');
    });
});

module.exports = router;