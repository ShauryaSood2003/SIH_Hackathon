import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client"

export const AccountContext=createContext(null);

function AccountProvider({children}){
    const [user,setUser]=useState({});
    const [registerOpen,setRegister]=useState(false);
    const [aboutusOpen,setAboutUsOpen]=useState(false);
    const [activeUser,setActiveUser]=useState([]);
    const [profileOpen,setProfileOpen]=useState(false);
    const [courseOpen,setCourseOpen]=useState(false);
    const [gameOpen,setGameOpen]=useState(false);
   
    const socket=useRef();

    useEffect(()=>{
        socket.current=io("ws://localhost:9000");
    },[]);

    return(
        <AccountContext.Provider value={{
            user,
            setUser,
            registerOpen,
            setRegister,
            socket,
            activeUser,
            setActiveUser,
            aboutusOpen,
            setAboutUsOpen,
            profileOpen,
            setProfileOpen,
            courseOpen,
            setCourseOpen,
            gameOpen,
            setGameOpen
        }}>
            {children}
        </AccountContext.Provider>
    );
}
export default AccountProvider;