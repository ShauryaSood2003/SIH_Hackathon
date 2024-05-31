import express from "express"
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import route from "./router/router.js";
import { MongoDB_Url } from "./data/config.js";
const app=express();

app.use(cors());
app.use(bodyParser.json({extented:true}));
app.use(bodyParser.urlencoded({extended:true}));


app.use("/",route);

const Connection=async()=>{
    try{
        await mongoose.connect(MongoDB_Url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("Connected Succesfully to MongoDB");
    }catch(error){
        console.log("error while connection to mongoDb cloud : "+error.message);
    }
    
}
Connection();


app.listen(8000,()=>{
    console.log("server running on port 8000");
})