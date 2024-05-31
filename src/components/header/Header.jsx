import { Box, Button } from "@mui/material";
import BrandLogo from "./BrandLogo";
import HeaderItems from "./HeaderItems";
import styled from "@emotion/styled";
import CoursesDialog from "../courses/CoursesDialog";
import { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";

const Container=styled(Box)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    padding:0 5%;
    position:relative;
    background:white;
`

const FlexConatiner=styled(Box)`
    display:flex;
    flex-wrap:wrap;
`


const StyledRegsuter=styled(Button)`
    color:white;
    padding:10px 30px;
    background:#f71e0f;
   
`


const Header=()=>{
    const [openCourse,setOpenCourse]=useState(false);
    const {setRegister,setAboutUsOpen,setCourseOpen}=useContext(AccountContext)
    const handelCourseClick=()=>{
        setOpenCourse(true);
    }
    const handelRegister=()=>{
        setRegister(true);
    }
    const handelAboutUs=()=>{
        setAboutUsOpen(true);
    }
    const handelHome=()=>{
        setAboutUsOpen(false);
        setCourseOpen(false);
    }
    return(
        <Box>
        <Container>
            <BrandLogo></BrandLogo>
            
            <FlexConatiner>
                <HeaderItems item="Home" onClick={handelHome}></HeaderItems>
                <HeaderItems item="AboutUs" onClick={handelAboutUs}></HeaderItems>
                <HeaderItems item="Courses⬇" onClick={handelCourseClick}></HeaderItems>
                <HeaderItems item="Teachers"></HeaderItems>
                <HeaderItems item="Blog"></HeaderItems>
                <HeaderItems item="Scheme"></HeaderItems>
            </FlexConatiner>
               
            <StyledRegsuter onClick={handelRegister}>Register</StyledRegsuter>
            <CoursesDialog open={openCourse} setOpenCourse={setOpenCourse}></CoursesDialog>
        </Container>
       
        </Box>
    );
}
export default Header;

