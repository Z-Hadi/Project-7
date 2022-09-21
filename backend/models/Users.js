const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Users extends Model {}

Users.init({
    FirstName: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            isAlpha: true

        },
        allowNull: false
    },
    LastName: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            isAlpha: true

        },
        allowNull: false
    },

    EmailAddress: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            isEmail: true
        },
        allowNull: false
    },
    Password: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,

        },
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