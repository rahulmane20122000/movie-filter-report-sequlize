"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedPaths = exports.routes = void 0;
const auth_routes_1 = require("../auth/auth.routes");
const movie_routes_1 = require("../movie/movie.routes");
const user_routes_1 = require("../user/user.routes");
const routes_types_1 = require("./routes.types");
exports.routes = [
    new routes_types_1.Route('/auth', auth_routes_1.authRouter),
    new routes_types_1.Route('/user', user_routes_1.userRouter),
    new routes_types_1.Route('/movies', movie_routes_1.movieRouter)
];
exports.excludedPaths = [
    { path: '/auth/login', method: "POST" },
    { path: '/auth/forgot-password', method: "POST" },
    { path: '/auth/change-password/', method: "PUT" },
    { path: '/auth/google', method: 'GET' },
    { path: '/auth/google/callback', method: 'GET' },
    { path: '/auth/google/success', method: 'GET' }
];
//# sourceMappingURL=routes.data.js.map