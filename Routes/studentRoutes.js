import express  from "express";
import {addData} from "../controller/studentController.js"

const router=express.Router()

router.post('/add/:Id',addData)

export default router