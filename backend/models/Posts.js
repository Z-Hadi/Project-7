const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Posts extends Model {}

Posts.init({
    PostID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    Title: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true
        },
        allowNull: false
    },
    Body: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ImageURL: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    Seen: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true

    }

}, {
    sequelize,
    modelName: 'Posts',
    timestamps: false
})

module.exports = Posts