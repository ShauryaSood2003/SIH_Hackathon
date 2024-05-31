import axios from "axios";


const url="http://localhost:8000";

export const AddUser=async(data)=>{
    try{
        await axios.post(url+"/addUser",data);
    }catch(error){
        console.log("failed to add user ",error.message);
    }
}

export const AddMessage=async(data)=>{
    try{
        await axios.post(url+"/messages/add",data);

    }catch(error){
        console.log("Failed to post Messge :",error.message);
    }
}
export const GetMessage=async()=>{
    try{
        const response=await axios.get(url+"/messages/get");
        return response.data;
    }catch(error){
        console.log("Error while getting the message: ",error.message);
    }
}