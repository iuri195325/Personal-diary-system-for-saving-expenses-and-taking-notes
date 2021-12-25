const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Anotacao = connection.define('Anotacao',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    anotacao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Anotacao;

//Anotacao.sync({force: false})