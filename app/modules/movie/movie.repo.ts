import { Op } from "sequelize";
import { sequelize } from "../../utility/sequelize";
import { movieConstants } from "./movie.constants";
import { movieModel } from "./movie.schema";
import { IMovie } from "./movie.types";




const add = (movie: IMovie) => movieModel.create({ ...movie });


const getAll = (limit: number, page: number, sortBy: string, orderBy: string, searchValue: string, field: string) => {
    const options: any = {
        limit: limit || 10,
        offset: (page || 0) * (limit || 10),
        order: [[sortBy || movieConstants.DEFAULT_FIELD, orderBy || movieConstants.DEFAULT_ORDER]],
        where: field ? { [field]: { [Op.iLike]: `%${searchValue}%` } } : {}
    };
    return movieModel.findAndCountAll(options)
};

const getReport = async (field: string, startDate: string, endDate: string) => movieModel.findAll({
    where: {
        releaseDate: { [Op.between]: [startDate || movieConstants.DEFAULT_STARTDATE, endDate || movieConstants.DEFAULT_ENDdATE] }
    },
    attributes: [
        field, [sequelize.fn("COUNT", sequelize.col(field)), "count"],
    ],
    group: [field]
});


export default { add, getAll, getReport }


