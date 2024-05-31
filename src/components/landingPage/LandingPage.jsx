import styled from "@emotion/styled";

import { Box, Typography } from "@mui/material";

const Container=styled(Box)`
    display:flex;
    flex-wrap:wrap;
    padding:6% 0 4% 7%;
    justify-content:space-between;
    background:#d0f5fc;
`
const Flex=styled(Box)`
 display:flex;
 margin:7% 0;
`
const LeftContainer=styled(Box)`
    width:40%; 
    @media (max-width: 768px) {
    width: 100%;
    }
`

const LeftContainerHeading1=styled(Typography)`
    font-size:40px;
    font-family: 'Dancing Script', cursive;
    color:#f71e0f;
    margin-bottom:10px;
`
const LeftContainerHeading2=styled(Typography)`
    font-size:65px;
    font-family: 'Kanit', sans-serif;
    color:#06758a;
`


const LeftContainerText=styled(Typography)`
    width:75%;
    color:#656869;
    @media (max-width: 768px){
        width:100%;
    }
   
`
const LeftContainerLiveButton=styled(Typography)`
    padding:12px 40px;
    color:white;
    background:#fa2a05;
   border-radius:10px;
   margin:0 10px;
   font-size:16px;
    font-weight:600;
`
const LeftContainerVedioButton=styled(Typography)`
    padding:10px 40px;
    border:2px solid #fa2a05;
    color:#fa2a05;
    border-radius:10px;
    font-size:16px;
    font-weight:600;
`
const LeftContentConatiner=styled(Box)`
    margin-Top:30px;
`

const RightContainer=styled(Box)`
   
   
`
const ImageStyled=styled('img')({
    width:"95%",
    height:450
})

const LandingPage=()=>{
    return(
        <Container>
            <LeftContainer>
                <LeftContainerHeading1>Welcome to Learn</LeftContainerHeading1>
                <LeftContainerHeading2>Best Future For</LeftContainerHeading2>
                <LeftContainerHeading2>Your Kids</LeftContainerHeading2>
               

                <LeftContentConatiner>
                    <LeftContainerText>Learn has a fully integrated learning management system.</LeftContainerText>
                    <LeftContainerText>Enroll courses,individual lessons and quizess.</LeftContainerText>
                </LeftContentConatiner>
                

                <Flex>
                    <LeftContainerLiveButton>Get Started</LeftContainerLiveButton>
                    <LeftContainerVedioButton>View More</LeftContainerVedioButton>
                </Flex>

              
            </LeftContainer>
            <RightContainer>
                <ImageStyled src={process.env.PUBLIC_URL+"/Kids1.png"} alt="MainImage"></ImageStyled>
            </RightContainer>
        </Container>
    );
}
export default LandingPage;