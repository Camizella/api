const Sequelize = require('sequelize');

const database = new Sequelize ('React', 'teste', 'teste123',{
    dialect: 'mssql', host: 'localhost', port:1433
});

database.sync();

module.exports = database;