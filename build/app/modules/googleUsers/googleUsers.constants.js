"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleUsersConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.googleUsersConstants = {
    FAILED: new response_handler_1.MessageHandler(400, "Failed To Process Request!!!"),
    USER_ADDED: new response_handler_1.MessageHandler(200, "User Added!!!")
};
//# sourceMappingURL=googleUsers.constants.js.map