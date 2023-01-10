"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleUsersModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
exports.googleUsersModel = sequelize_2.sequelize.define('googleUsers', {
    googleId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
//# sourceMappingURL=googleUsers.schema.js.map