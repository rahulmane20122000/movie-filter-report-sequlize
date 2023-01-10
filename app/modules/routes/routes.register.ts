import {Application, json, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { ResponseHandler } from '../../utility/response-handler';
import { excludedPaths, routes } from './routes.data';
import { authorize } from '../../utility/authorize';
import Session from "express-session";
import passport from 'passport';
import { passPort } from '../../utility/passport';
import { googleAuth } from '../../utility/googleAuth';

export const registerRoutes = (app: Application) => {
    app.use(helmet());
    app.use(cors());
    app.use(json());

    app.use(authorize(excludedPaths));

    app.use(
        Session({
            resave: false,
            saveUninitialized: true,
            secret: "SECRET",
        })
    )
    app.use(passport.initialize());
    app.use(passport.session());
   
    passPort();
    googleAuth();

    for(let route of routes) {
        app.use(route.path, route.router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(new ResponseHandler(null, err));
    })
}