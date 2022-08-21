const Sequelize = require('sequelize');
const user = 'postgres'
const host = 'localhost'
const database = 'Project-7'
const password = '123'
const port = '5432'




const sequelize = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',

})

module.exports = sequelize;