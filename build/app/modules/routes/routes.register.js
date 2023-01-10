"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const response_handler_1 = require("../../utility/response-handler");
const routes_data_1 = require("./routes.data");
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = require("../../utility/passport");
const googleAuth_1 = require("../../utility/googleAuth");
const registerRoutes = (app) => {
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)());
    app.use((0, express_1.json)());
    // app.use(authorize(excludedPaths));
    app.use((0, express_session_1.default)({
        resave: false,
        saveUninitialized: true,
        secret: "SECRET",
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
    (0, passport_2.passPort)();
    (0, googleAuth_1.googleAuth)();
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.ResponseHandler(null, err));
    });
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=routes.register.js.map