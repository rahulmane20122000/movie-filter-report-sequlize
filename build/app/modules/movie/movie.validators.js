"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.movieValidator = [
    (0, express_validator_1.body)("title").isString().notEmpty().withMessage("Title is Required!!!"),
    (0, express_validator_1.body)("imdb").isDecimal().notEmpty().withMessage("imdb is Required!!!"),
    (0, express_validator_1.body)("gener").isString().notEmpty().withMessage("gener is Required!!!"),
    (0, express_validator_1.body)("releaseDate").isDate().notEmpty().withMessage("releaseYear is Required!!!"),
    (0, express_validator_1.body)("productionName").isString().notEmpty().withMessage("productionName is Required!!!"),
    validate_1.validate
];
//# sourceMappingURL=movie.validators.js.map