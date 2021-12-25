const Sequelize = require('sequelize');
const connection = require('../../database/database');

const Information = connection.define('Information',{
    tituloIformation:{
        type: Sequelize.STRING,
        allowNull: false
    },
    information:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Information;

//Information.sync({force: false})