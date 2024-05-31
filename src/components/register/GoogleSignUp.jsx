import { Box } from "@mui/material";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import GoogleIcon from '@mui/icons-material/Google';
import styled from "@emotion/styled";
import { AddUser } from "../../api/api.js";
import { useContext,useEffect } from "react";
import {AccountContext} from "../../context/AccountProvider"

const GoogleIconStyled=styled(GoogleIcon)`
    background:#ab2c02;
    padding:10px;
    font-size:30px;
    font-weight:700;
    border-radius:50%;
    margin:0 44.5%;
`

const GoogleSignUp=()=>{
    const {user,setUser,setRegister,setActiveUser,socket}=useContext(AccountContext);

    useEffect(()=>{
        socket.current.emit("addUsers",user);   
        socket.current.on("getUsers",users =>{
            setActiveUser(users);
        });
    },[user,socket,setActiveUser]);
    
    return(
        <Box style={{position:"relative"}}>
            <GoogleIconStyled></GoogleIconStyled>

            <Box style={{position:"absolute",top:0,left:"49%"}} onClick={()=>{setRegister(false)}}>
                <GoogleLogin 
                    onSuccess={async (res)=>{
                        const decoded=jwt_decode(res.credential);
                        setUser(decoded);
                        await AddUser(decoded);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    
                />
            </Box>
        </Box>
    );
}

export default GoogleSignUp;