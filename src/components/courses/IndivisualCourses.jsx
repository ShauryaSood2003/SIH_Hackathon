import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Container=styled(Box)`
    display:flex;
    border-bottom:1px solid black;
    margin:0 10px;
    padding:5px 0;
    align-items:center;
    
`

const StyledImage=styled('img')({
    width:100,
    height:90
});

const Text=styled(Typography)`
    font-size:14px;
    text-decoration:underline;
    padding:9px 8px;
`;

const Content=styled(Typography)`
    font-size:14px;
    color:#757474;
    padding:4px 8px;
`
const IndivisualCourses=({dialogimg,text,content,onClick})=>{
    return(
        <Container onClick={onClick}>
            <StyledImage src={dialogimg} alt="courseImage"></StyledImage>
            <Box>
                <Text>{text}</Text>
                <Content>{content}</Content>
            </Box>
        </Container>
    );
}
export default IndivisualCourses;