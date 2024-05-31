import { Box } from "@mui/material";
import BrandLogo from "./BrandLogo";
import HeaderItems from "./HeaderItems";
import styled from "@emotion/styled";
import CoursesDialog from "../courses/CoursesDialog";
import { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import Chat from "../communityChat/Chat";
import ProfileDialog from "../profile/ProfileDialog";

const Container=styled(Box)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    margin:0 5%;
    position:relative;
`

const FlexConatiner=styled(Box)`
    display:flex;
    flex-wrap:wrap;
`

const Imagestyled=styled('img')({
    borderRadius:"50%",
    width:50,
    height:50
});



const HeaderLoggedIn=()=>{
    const [openCourse,setOpenCourse]=useState(false);
    const [openProfile,setOpenProfile]=useState(false);
    const [chat,setChat]=useState(false);

    const {user,setAboutUsOpen,setProfileOpen,setCourseOpen,setGameOpen} =useContext(AccountContext);

    const handelCourseClick=()=>{
        setProfileOpen(false);
        setOpenCourse(true);
    }
 
    const handelChatClick=()=>{
        setChat(true);
    }
    const handelProfileOpen=()=>{
        setOpenProfile(true);
        setAboutUsOpen(false);
        setCourseOpen(false);
    }
    const handelHome=()=>{
        setAboutUsOpen(false);
        setProfileOpen(false);
        setCourseOpen(false);
        setGameOpen(false);
    }
    const handelGameClick=()=>{
        setGameOpen(true);
        setProfileOpen(false);
        setCourseOpen(false);
    }
   
    return(
        <Box>
        <Container>
            <BrandLogo></BrandLogo>
            
            <FlexConatiner>
                <HeaderItems item="Home" onClick={handelHome}></HeaderItems>
                <HeaderItems item="Chat" onClick={handelChatClick}></HeaderItems>
                <HeaderItems item="Courses⬇" onClick={handelCourseClick}></HeaderItems>
                <HeaderItems item="Games" onClick={handelGameClick}></HeaderItems>
                <HeaderItems item="Blog"></HeaderItems>
                <HeaderItems item="Scheme"></HeaderItems>
            </FlexConatiner>
               
            <Imagestyled onClick={handelProfileOpen} src={user.picture} alt="profileImage"></Imagestyled>
            <CoursesDialog open={openCourse} setOpenCourse={setOpenCourse}></CoursesDialog>
            <Chat open={chat} setChat={setChat}></Chat>
            <ProfileDialog open={openProfile} setOpenProfile={setOpenProfile}></ProfileDialog>
        </Container>
       
        </Box>
    );
}
export default HeaderLoggedIn;

