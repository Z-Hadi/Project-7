import { Sequelize, Model, DataTypes } from 'sequelize'
const Model = Sequelize.Model;
const class Posts extends Model {}

Posts.init({
    PostID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Title: {
        type: DataTypes.TEXT,
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
        allowNull: false
    }

}, {
    sequelize,
    modelName: 'Posts',
    timestamps: false
})