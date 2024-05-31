import express, { Router } from "express";
import { User } from "../schema/UserSchema.js";
import Message from "../schema/Message.js";


const route=express.Router();

route.post("/addUser",async(req,res)=>{
    try{

        await User.findOne({sub:req.body.sub}).then((found)=>{
            if(found){
                return res.status(200).json({msg:'user already exists'});
            }
            const newUser =new User(req.body);
            newUser.save();
            return res.status(200).json({msg:'user added successfully'});

        })

    }catch(error){
        return res.status(500).json({msg:error.message});
    }
    
})

route.post("/messages/add",(req,res)=>{
    try{
        const newMessage=new Message(req.body);
        newMessage.save();
        return res.status(200).json({msg:"Message Posted successfully"});
    }catch(error){
        return res.status(500).json({msg:error.message});
    }
})

route.get("/messages/get",async(req,res)=>{
    try{
        const response=await Message.find();
        return res.status(200).json(response);
    }catch(error){
        return res.status(500).json({msg:error.message});
    }
})

export default route;