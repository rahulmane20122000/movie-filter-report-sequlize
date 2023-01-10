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
const authorize_1 = require("../../utility/authorize");
const password_1 = require("../../utility/password");
const user_constants_1 = require("./user.constants");
const user_repo_1 = __importDefault(require("./user.repo"));
const roles_service_1 = __importDefault(require("../roles/roles.service"));
const createUser = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.add(userDetails);
        return user_constants_1.userConstants.USER_ADDED;
    }
    catch (error) {
        throw error;
    }
});
const updateUser = (id, updatedUserDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.updateOne(id, updatedUserDetails);
        return user_constants_1.userConstants.USER_UPDATED;
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
const getUserByMail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.getOne(email);
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
const login = (loginDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_repo_1.default.getOne({ email: loginDetails.email });
        const isMatched = yield (0, password_1.comparePassword)(loginDetails.password, user.password);
        const role = yield roles_service_1.default.getRole(user.roleId);
        const roleId = String(role === null || role === void 0 ? void 0 : role.dataValues.id);
        if (user && isMatched) {
            const accessToken = (0, authorize_1.createToken)({ id: user.id, name: user.name, role: roleId }, process.env.ACCESS_TOKEN_SECRET || '', '1d');
            const refreshToken = (0, authorize_1.createToken)({ id: user._id }, process.env.ACCESS_TOKEN_SECRET || "", '365d');
            return { accessToken: accessToken, refreshToken: refreshToken };
        }
        throw user_constants_1.userConstants.INVALID_DETAILS;
    }
    catch (error) {
        throw user_constants_1.userConstants.INVALID_DETAILS;
    }
});
const updatePassword = (userId, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.updateOne(userId, { password: newPassword });
        return user_constants_1.userConstants.PASSWORD_CHANGED;
    }
    catch (error) {
        throw user_constants_1.userConstants.FAILED;
    }
});
exports.default = { createUser, updateUser, login, getUserByMail, updatePassword };
//# sourceMappingURL=user.service.js.map