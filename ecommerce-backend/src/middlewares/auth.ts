import { User } from "../models/user.js";
import ErrorHandler from "../utils/util-class.js";
import { TryCatch } from "./error.js";

//middleware to make sure only admin is allowed
export const adminOnly = TryCatch(async(req,res,next)=>{
    const {id}  = req.query;
    if(!id) return next (new ErrorHandler("Please login first",401));
    const user  = await User.findById(id);
    if(!user) return next (new ErrorHandler("Fake ID",401));
    if(user.role!="admin") return next (new ErrorHandler("You are not an admin",401));
    next();
})