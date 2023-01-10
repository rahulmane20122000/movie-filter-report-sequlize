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
exports.movieRouter = void 0;
const express_1 = require("express");
const response_handler_1 = require("../../utility/response-handler");
const movie_service_1 = __importDefault(require("./movie.service"));
const movie_validators_1 = require("./movie.validators");
exports.movieRouter = (0, express_1.Router)();
exports.movieRouter.post("/", movie_validators_1.movieValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield movie_service_1.default.addMovie(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.movieRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { order, sortBy, limit, page, searchValue, field } = req.query;
        const response = yield movie_service_1.default.getAllMovies(limit, page, sortBy, order, searchValue, field);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.movieRouter.get("/report", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { field, startDate, endDate } = req.query;
        const response = yield movie_service_1.default.getReport(field, startDate, endDate);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=movie.routes.js.map