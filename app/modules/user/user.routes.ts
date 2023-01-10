import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import userService from "./user.service";

export const userRouter = Router();





userRouter.put('/:id',async (req:Request, res:Response, next:NextFunction) => {
    try {
        const response = await userService.updateUser(req.params.id, req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});