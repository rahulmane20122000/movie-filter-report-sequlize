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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_constants_1 = require("./movie.constants");
const movie_repo_1 = __importDefault(require("./movie.repo"));
const addMovie = (movie) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield movie_repo_1.default.add(movie);
        return movie_constants_1.movieConstants.MOVIE_ADDED;
    }
    catch (error) {
        throw movie_constants_1.movieConstants.FAILED;
    }
});
const getAllMovies = (limit, page, sortBy, order, searchValue, field) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield movie_repo_1.default.getAll(limit, page, sortBy, order, searchValue, field);
    }
    catch (error) {
        throw error;
        throw movie_constants_1.movieConstants.FAILED;
    }
});
const getReport = (field, startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        field = field || 'gener';
        return yield movie_repo_1.default.getReport(field, startDate, endDate);
    }
    catch (error) {
        throw movie_constants_1.movieConstants.FAILED;
    }
});
exports.default = { addMovie, getAllMovies, getReport };
//# sourceMappingURL=movie.service.js.map