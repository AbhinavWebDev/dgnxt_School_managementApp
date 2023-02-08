import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},
    {timeStamps:true}
)

const UserModel=mongoose.model("Users",userSchema);

export default UserModel