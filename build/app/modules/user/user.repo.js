"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const add = (userDetails) => user_schema_1.userModel.create(Object.assign({}, userDetails));
const getOne = (field) => user_schema_1.userModel.findOne({ where: Object.assign({}, field) });
const updateOne = (id, updatedUserDetails) => user_schema_1.userModel.update(updatedUserDetails, { where: { id: id } });
exports.default = { add, updateOne, getOne };
//# sourceMappingURL=user.repo.js.map