import mongoose from "mongoose";

const schema=new mongoose.Schema({
    senderId:{
        type:String
    },
    sendermail:{
        type:String
    },
    type:{
        type:String
    },
    text:{
        type:String
    }
},{
    timestamps:true
});

const Message=new mongoose.model("message",schema);

export default Message;