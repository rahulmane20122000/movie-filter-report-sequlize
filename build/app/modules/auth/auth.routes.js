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
exports.authRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const googleAuth_1 = require("../../utility/googleAuth");
const response_handler_1 = require("../../utility/response-handler");
const auth_service_1 = __importDefault(require("./auth.service"));
const auth_validators_1 = require("./auth.validators");
const passport_1 = __importDefault(require("passport"));
exports.authRouter = (0, express_1.Router)();
exports.authRouter.get("/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
exports.authRouter.get("/google/callback", passport_1.default.authenticate("google", { failureRedirect: "/auth/error", successRedirect: '/auth/success' }));
exports.authRouter.get("/success", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield auth_service_1.default.googleLogin(googleAuth_1.userProfile);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.authRouter.post("/login", auth_validators_1.loginValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield auth_service_1.default.login(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.authRouter.post('/create-user', auth_validators_1.createUserValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield auth_service_1.default.createUser(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.authRouter.post('/forgot-password', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield auth_service_1.default.forgotPassword(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.authRouter.put('/change-password/:token', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = (0, authorize_1.verifyToken)(req.params.token);
        console.log(user);
        const response = yield auth_service_1.default.resetPassword(user.id, req.body.password);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=auth.routes.js.map