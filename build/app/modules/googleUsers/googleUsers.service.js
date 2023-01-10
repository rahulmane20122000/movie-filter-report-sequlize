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
const googleUsers_constants_1 = require("./googleUsers.constants");
const googleUsers_repo_1 = __importDefault(require("./googleUsers.repo"));
const addUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield googleUsers_repo_1.default.add(userData);
        return googleUsers_constants_1.googleUsersConstants.USER_ADDED;
    }
    catch (error) {
        throw error;
        throw googleUsers_constants_1.googleUsersConstants.FAILED;
    }
});
const getOneUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield googleUsers_repo_1.default.getOne(id);
    }
    catch (error) {
        // throw error
        throw googleUsers_constants_1.googleUsersConstants.FAILED;
    }
});
exports.default = { addUser, getOneUser };
//# sourceMappingURL=googleUsers.service.js.map