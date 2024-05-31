
import { Box, Dialog,Button, Typography } from "@mui/material";
import HeaderItems from "../header/HeaderItems";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import styled from "@emotion/styled";

const Mail=styled(Typography)`
    font-size:12px;
`
const Name=styled(Typography)`
    font-weight:700;
`
const StyledButton=styled(Button)`
    border-radius:20px;
    border:2px solid #565657;
    padding:6px 25px;
    margin:20px 0 5px;
    color:black;
`

const ProfileDialog=({open,setOpenProfile})=>{

    const {user,setAboutUsOpen,setProfileOpen}=useContext(AccountContext);

    const dialogStyle={
        position: "absolute",
        right:"-1.2%",
        top: "10%",
        width:300,
        height:400,
        textAlign:"center",
        background:"#fae4d9",
        borderRadius:"15px",
        border:"8px solid white"
    }
    const imageStyled={
        borderRadius:"50%",
        width:70,
        height:70,
        margin:20
    }
  
    const handelHome=()=>{
        setAboutUsOpen(false);
    }

    const handelprofileClose=()=>{
        setOpenProfile(false);
    }
    const handelOpenProfile=()=>{
        setProfileOpen(true);
    }
    return(
        <Dialog onClose={handelprofileClose}  open={open} PaperProps={{style:dialogStyle}}>
            <Box>
                <img style={imageStyled} src={user.picture} alt="profile"></img>
                <Name>{user.name}</Name>
                <Mail>{user.email}</Mail>
                <StyledButton onClick={handelOpenProfile}>Public Profile</StyledButton>
                <hr></hr>
            </Box>
            <Box>
                <HeaderItems item="Home" onClick={handelHome}></HeaderItems>
                <HeaderItems item="Blog"></HeaderItems>
                <HeaderItems item="Scheme"></HeaderItems>
            </Box>
        </Dialog>
    )
};
export default ProfileDialog;