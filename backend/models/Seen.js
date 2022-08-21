import { Sequelize, Model, DataTypes } from 'sequelize'
const Model = Sequelize.Model;

const class Seen extends Model {}

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