import { NextFunction, Request, Response, Router } from "express";
import { ResponseHandler } from "../../utility/response-handler";
import movieService from "./movie.service";
import { movieValidator } from "./movie.validators";

export const movieRouter = Router();

movieRouter.post("/",movieValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await movieService.addMovie(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

movieRouter.get("/",async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const {order,sortBy,limit,page,searchValue,field} = req.query
        const response = await movieService.getAllMovies(limit as any,page as any,sortBy as string,order as string,searchValue as string,field as any);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});

movieRouter.get("/report",async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const { field,startDate,endDate} = req.query
        const response = await movieService.getReport(field,startDate as string,endDate as string);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})