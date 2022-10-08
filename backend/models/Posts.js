const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

class Posts extends Model {}

Posts.init({
    postId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    title: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true
        },
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    imageUrl: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    seen: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
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