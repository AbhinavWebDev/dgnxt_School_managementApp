import mongoose,{SchemaTypes} from "mongoose";

const studentSchema=mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    English:{
        type:Number,
        required:true
    },
    Malayalam:{
        type:Number,
        required:true
    },
    Maths:{
        type:Number,
        required:true
    }, 
    physics:{
        type:Number,
        required:true
    },
    Chemistry:{
        type:Number,
        required:true
    },
    ComputerScience:{
        type:Number,
        required:true
    }
},
    {timeStamps:true}
)

const StudentModel=mongoose.model("students",studentSchema);

export default StudentModel