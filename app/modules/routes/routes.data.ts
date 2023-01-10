

import { IExcludedPaths } from "../../utility/authorize";
import { authRouter } from "../auth/auth.routes";
import { movieRouter } from "../movie/movie.routes";
import { userRouter } from "../user/user.routes";
import { Route, Routes } from "./routes.types";

export const routes: Routes = [
  new Route('/auth', authRouter),
  new Route('/user', userRouter),
  new Route('/movies', movieRouter)
];

export const excludedPaths: IExcludedPaths[] = [
  { path: '/auth/login', method: "POST" },
  { path: '/auth/forgot-password', method: "POST" },
  { path: '/auth/change-password/', method: "PUT" },
  {path:'/auth/google',method:'GET'},
  {path:'/auth/google/callback',method:'GET'},
  {path:'/auth/google/success',method:'GET'}
]
