"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passPort = void 0;
const passport_1 = __importDefault(require("passport"));
const passPort = () => {
    passport_1.default.initialize();
    passport_1.default.session();
    passport_1.default.serializeUser(function (user, cb) {
        cb(null, user);
    });
    passport_1.default.deserializeUser(function (obj, cb) {
        cb(null, obj);
    });
};
exports.passPort = passPort;
//# sourceMappingURL=passport.js.map