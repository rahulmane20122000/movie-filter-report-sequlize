import { googleUsersModel } from "./googleUsers.schema";
import { IGoogleUsers } from "./googleUsers.types";

const add = (userData:IGoogleUsers)=> googleUsersModel.create({...userData});
const getOne= (id:string)=>googleUsersModel.findOne({where:{googleId:id}});

export default {add,getOne}