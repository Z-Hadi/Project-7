const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = require('../config/database')


class Seen extends Model {}

Seen.init({
    PostID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SeenID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'Seen',
    timestamps: false
})
module.exports = Seen