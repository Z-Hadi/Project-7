const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Users extends Model {}

Users.init({
    FirstName: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    LastName: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    EmailAddress: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    Password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ImageURL: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    UserID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }

}, {
    sequelize,
    modelName: 'Users',
    timestamps: false
})

module.exports = Users