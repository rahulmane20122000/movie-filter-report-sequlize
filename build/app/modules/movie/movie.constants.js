"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.movieConstants = {
    FAILED: new response_handler_1.MessageHandler(400, "Failed To Process Request!!!"),
    MOVIE_ADDED: new response_handler_1.MessageHandler(200, "Movie Added!!!"),
    DEFAULT_FIELD: 'title',
    DEFAULT_ORDER: 'ASC',
    DEFAULT_STARTDATE: "1900",
    DEFAULT_ENDdATE: "2022"
};
//# sourceMappingURL=movie.constants.js.map