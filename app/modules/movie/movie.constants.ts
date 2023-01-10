import { MessageHandler } from "../../utility/response-handler";

export const movieConstants = {
    FAILED: new MessageHandler(400,"Failed To Process Request!!!"),
    MOVIE_ADDED: new MessageHandler(200,"Movie Added!!!"),
    DEFAULT_FIELD: 'title',
    DEFAULT_ORDER: 'ASC',
    DEFAULT_STARTDATE : "1900",
    DEFAULT_ENDdATE:"2022" 
    
}