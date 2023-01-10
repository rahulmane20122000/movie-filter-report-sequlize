"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../../utility/sequelize");
const movie_constants_1 = require("./movie.constants");
const movie_schema_1 = require("./movie.schema");
const add = (movie) => movie_schema_1.movieModel.create(Object.assign({}, movie));
const getAll = (limit, page, sortBy, orderBy, searchValue, field) => {
    const options = {
        limit: limit || 10,
        offset: (page || 0) * (limit || 10),
        order: [[sortBy || movie_constants_1.movieConstants.DEFAULT_FIELD, orderBy || movie_constants_1.movieConstants.DEFAULT_ORDER]],
        where: field ? { [field]: { [sequelize_1.Op.iLike]: `%${searchValue}%` } } : {}
    };
    return movie_schema_1.movieModel.findAndCountAll(options);
};
const getReport = (field, startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    return movie_schema_1.movieModel.findAll({
        where: {
            releaseDate: { [sequelize_1.Op.between]: [startDate || movie_constants_1.movieConstants.DEFAULT_STARTDATE, endDate || movie_constants_1.movieConstants.DEFAULT_ENDdATE] }
        },
        attributes: [
            field, [sequelize_2.sequelize.fn("COUNT", sequelize_2.sequelize.col(field)), "count"],
        ],
        group: [field]
    });
});
exports.default = { add, getAll, getReport };
//# sourceMappingURL=movie.repo.js.map