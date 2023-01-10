import { DataTypes } from "sequelize";
import { sequelize } from "../../utility/sequelize";

export const movieModel = sequelize.define('movies', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    imdb: {
        type: DataTypes.DECIMAL(10, 1),
        allowNull: false,
        validate: {
            min: 0,
            max: 10
        }
    },
    gener: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releaseDate: {
        type: DataTypes.DATEONLY,
    },
    productionName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false
    }
});