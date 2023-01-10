import userService from "../user/user.service";
import { IUser } from "../user/user.types";
import { createHash } from "../../utility/password";
import { ILogin } from "./auth.types";
import { createToken } from "../../utility/authorize";
import { sendEmail } from "../../utility/email";
import { authConstants } from "./auth.constants";
import googleUsersService from "../googleUsers/googleUsers.service";




const createUser = async (userDetails: IUser) => {
    try {
        userDetails.password = await createHash(userDetails.password);
        const response = await userService.createUser(userDetails);
        return response;
    } catch (error) {
        throw error
    }
}





const login = async (loginDetails: ILogin) => {
    try {
        const response = await userService.login(loginDetails);
        return response;
    } catch (error) {
        throw error;
    }
}


const forgotPassword = async (email: object) => {
    try {
        const userDetails: any = await userService.getUserByMail(email);
        console.log(userDetails.id)
        const token = createToken({ id: userDetails.id }, process.env.ACCESS_TOKEN_SECRET || "", '1d');
        const { URL } = process.env;
        const link = `${URL}/${token}`;
        await sendEmail(userDetails.email, "FORGOT PASSWORD", `
            Hi, ${userDetails.name},
            Your password reset link is here ${link}
        `)
        return authConstants.PASSWORD_LINK;
    } catch (error) {
        throw error;
    }
}

const resetPassword = async (userId: string, newPassword: string) => {
    try {
        console.log(newPassword);
        newPassword = await createHash(newPassword);
        const response = await userService.updatePassword(userId, newPassword);
        return response;
    } catch (error) {
        throw error;
    }

}

const googleLogin =async (userProfile:any) => {
    try {
        const user:any = await googleUsersService.getOneUser(userProfile.id);
        if(user){
        const accessToken = createToken({ id: user.googleId, email: user.email }, process.env.ACCESS_TOKEN_SECRET || '', '1d');
         return { accessToken:accessToken}
        }
        const {id,displayName,email} = userProfile;
       const response = await googleUsersService.addUser({googleId:id,name:displayName,email:email})
        return response;
    } catch (error) {
        throw error;
    }
}


export default { createUser, login, forgotPassword, resetPassword,googleLogin }



