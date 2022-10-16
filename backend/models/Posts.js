const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Users = require("./Users");
class Posts extends Model {}

Posts.init({
    postId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
        },
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    imageUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: "Posts",
    timestamps: true,
});

// Users.hasMany(Posts);
Posts.belongsTo(Users, {
    foreignKey: "userId",
});

module.exports = Posts;