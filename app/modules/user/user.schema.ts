import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";
import { ROLES } from "../roles/roles.constants";
import { rolesModel } from "../roles/roles.schema";




export const userModel = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.STRING,
        defaultValue: ROLES.USER
    }


}, { timestamps: true });

userModel.belongsTo(rolesModel, { 'foreignKey': "roleId" });
rolesModel.hasOne(userModel);





