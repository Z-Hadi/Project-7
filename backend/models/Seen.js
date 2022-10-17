const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Users = require("./Users");
const Posts = require("./Posts");


class Seen extends Model {}

Seen.init({
  
    seenId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  
}, {
    sequelize,
    modelName: "Seen",
    timestamps: false,
});







module.exports = Seen;