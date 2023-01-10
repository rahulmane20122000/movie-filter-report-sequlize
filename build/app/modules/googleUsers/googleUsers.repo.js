"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleUsers_schema_1 = require("./googleUsers.schema");
const add = (userData) => googleUsers_schema_1.googleUsersModel.create(Object.assign({}, userData));
const getOne = (id) => googleUsers_schema_1.googleUsersModel.findOne({ where: { id: id } });
exports.default = { add, getOne };
//# sourceMappingURL=googleUsers.repo.js.map