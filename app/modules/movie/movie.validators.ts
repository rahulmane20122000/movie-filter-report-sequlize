import { body } from "express-validator";
import { validate } from "../../utility/validate";


export const movieValidator = [
    body("title").isString().notEmpty().withMessage("Title is Required!!!"),
    body("imdb").isDecimal().notEmpty().withMessage("imdb is Required!!!"),
    body("gener").isString().notEmpty().withMessage("gener is Required!!!"),
    body("releaseDate").isDate().notEmpty().withMessage("releaseYear is Required!!!"),
    body("productionName").isString().notEmpty().withMessage("productionName is Required!!!"),
    validate

]