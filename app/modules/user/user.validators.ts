import { body } from "express-validator";
import { validate } from "../../utility/validate";

export const updateUserValidator = [
    body('name').optional({nullable: true}).isString().withMessage('name is required!'),
    body('email').optional({nullable: true}).isString().withMessage('email is required!'),
    body('password').optional({nullable: true}).isString().withMessage('password is required!'),
    validate
]