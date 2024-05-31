import { Server } from "socket.io";

const io = new Server(9000, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let users = [];
const addUser = (userData, socketId) => {
    !users.some(user => user.sub == userData.sub) && users.push({ ...userData, socketId });
}


io.on("connection", (socket) => {
    console.log("user connected");
    
    socket.on("addUsers",(userData)=>{ //on listen to the event addUser
        addUser(userData,socket.id);
        io.emit("getUsers",users); //to send info from backend to front end
    });

    socket.on("sendMessage",data =>{ //on listen to the event sendMessage
        console.log("message added");
        io.emit("broadcastMessage",data);
    });
});
