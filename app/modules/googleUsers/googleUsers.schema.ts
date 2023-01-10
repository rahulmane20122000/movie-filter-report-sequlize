import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";

export const googleUsersModel = sequelize.define('googleUsers',{
    googleId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});