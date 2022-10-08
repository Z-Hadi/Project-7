const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Users extends Model {}

Users.init({
    firstName: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            isAlpha: true,
        },
        allowNull: false,
    },
    lastName: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            isAlpha: true,
        },
        allowNull: false,
    },

    emailAddress: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
            isEmail: true,
        },
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
        },
        allowNull: false,
    },

    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: "Users",
    timestamps: false,
});

module.exports = Users;