const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')


class Seen extends Model {}

Seen.init({
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    seenId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'Seen',
    timestamps: false
})
module.exports = Seen