import { userModel } from "./user.schema";
import { IUser } from "./user.types";

const add = (userDetails: IUser) => userModel.create({ ...userDetails });

const getOne = (field: object) => userModel.findOne({ where: { ...field } });

const updateOne = (id: string, updatedUserDetails: object) => userModel.update(updatedUserDetails, { where: { id: id } });





export default { add, updateOne, getOne }