"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.updateUserValidator = [
    (0, express_validator_1.body)('name').optional({ nullable: true }).isString().withMessage('name is required!'),
    (0, express_validator_1.body)('email').optional({ nullable: true }).isString().withMessage('email is required!'),
    (0, express_validator_1.body)('password').optional({ nullable: true }).isString().withMessage('password is required!'),
    validate_1.validate
];
//# sourceMappingURL=user.validators.js.map