"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleAuth = exports.userProfile = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth2_1 = require("passport-google-oauth2");
const googleAuth = () => {
    const { CLIENT_ID, CLIENT_SECRET } = process.env;
    passport_1.default.use(new passport_google_oauth2_1.Strategy({
        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
    }, (accessToken, refreshToken, profile, done) => {
        exports.userProfile = profile;
        return done(null, profile);
    }));
};
exports.googleAuth = googleAuth;
//# sourceMappingURL=googleAuth.js.map