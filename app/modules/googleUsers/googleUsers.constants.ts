import { MessageHandler } from "../../utility/response-handler";

export const googleUsersConstants = {
    FAILED: new MessageHandler(400,"Failed To Process Request!!!"),
    USER_ADDED: new MessageHandler(200,"User Added!!!")
}