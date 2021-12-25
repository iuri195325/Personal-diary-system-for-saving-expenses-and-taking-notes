const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Links = connection.define('links',{
    tituloLinks:{
        type: Sequelize.STRING,
        allowNull: false
    },
    links:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});



//Links.sync({force: false})
module.exports = Links;