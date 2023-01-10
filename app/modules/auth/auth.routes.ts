import { NextFunction, Request, Response, Router } from "express";

import { verifyToken } from "../../utility/authorize";
import { userProfile } from "../../utility/googleAuth";
import { ResponseHandler } from "../../utility/response-handler";
import authService from "./auth.service";
import { createUserValidator, loginValidator } from "./auth.validators";
import passport from "passport";

export const authRouter = Router();

authRouter.get("/google",passport.authenticate("google", { scope: ["profile", "email"] }));

authRouter.get("/google/callback",passport.authenticate("google", { failureRedirect: "/auth/error", successRedirect:'/auth/success' }));

authRouter.get("/success",async(req,res,next)=>{
    try {
        const response = await authService.googleLogin(userProfile);
        res.send(new ResponseHandler(response))
    } catch (error) {
        next(error);
    }
})

authRouter.post("/login", loginValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await authService.login(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
})

authRouter.post('/create-user', createUserValidator, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await authService.createUser(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});





authRouter.post('/forgot-password', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await authService.forgotPassword(req.body);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});


authRouter.put('/change-password/:token', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = verifyToken(req.params.token) as any;
        console.log(user);
        const response = await authService.resetPassword(user.id, req.body.password);
        res.send(new ResponseHandler(response));
    } catch (error) {
        next(error);
    }
});






