
import mongoose from 'mongoose';
import StudentModel from '../Models/studentModel.js';


export const addData = async (req, res) => {
    const {Id} = req.params
    console.log("ID",Id);

    if(Id==="63e37bd4af85f1f101a23397"){
        const newdata = await StudentModel(req.body);
        newdata._id=mongoose.Types.ObjectId();
        try{

            await newdata.save();
            res.status(200).json(newdata)
            }
            
         catch (error){
            res.status(400).json({error})
        }

    }

    else{
        res.status(400).json({ "Message": "Action Forbidden" }) 
    }

    
}