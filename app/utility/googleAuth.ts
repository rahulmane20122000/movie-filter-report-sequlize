import passport from "passport";
import {Strategy} from 'passport-google-oauth2'
export let userProfile: any;
export const googleAuth = () => {
   
    const { CLIENT_ID, CLIENT_SECRET } = process.env;
    passport.use(
        new Strategy(
            {
                clientID: CLIENT_ID as string,
                clientSecret: CLIENT_SECRET as string,
                callbackURL: "http://localhost:3000/auth/google/callback",
            },
            (
                accessToken: string,
                refreshToken: string,
                profile: any,
                done: any
            ) => {
                userProfile=profile
                return done(null, profile);
            }
        )
    );
};