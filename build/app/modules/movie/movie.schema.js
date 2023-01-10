"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieModel = void 0;
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
exports.movieModel = sequelize_2.sequelize.define('movies', {
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    imdb: {
        type: sequelize_1.DataTypes.DECIMAL(10, 1),
        allowNull: false,
        validate: {
            min: 0,
            max: 10
        }
    },
    gener: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    releaseDate: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    productionName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
//# sourceMappingURL=movie.schema.js.map