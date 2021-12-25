const express = require('express');
const router = express.Router();
const Links = require("../links/Links");

router.get('/links', (req, res) => {
    Links.findAll({raw: true}).then(link => {
        res.render("saveL", {
            link: link
        });
    });
});

router.post('/saveLink', (req, res) => {
    var tituloLinks = req.body.tituloLink;
    var link = req.body.link;
    Links.create({
        tituloLinks :  tituloLinks,
        links: link
    }).then(() => {
        res.redirect('/savelinks');
    }).catch((err) => {
        console.log(err);
    });
});

router.post('/links/delete', (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        if(!isNaN(id)) {
           Links.destroy({ 
                where: { id: id }
            }).then(() => {
                res.redirect('/links');
            })
        }else{
            res.redirect('/home');
        }
    }else{
        res.redirect('/home');
    }
});

module.exports = router;