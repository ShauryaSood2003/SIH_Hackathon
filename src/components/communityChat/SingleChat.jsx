import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";


const SenderConatiner=styled(Box)`
    display: inline-block; 
    padding:5px 15px;
    background:#f590c3;
    border-radius:10px;
    margin:10px;
    float: right;
`
const ReciverContaine=styled(Box)`
    display: inline-block; 
    padding:5px 15px;
    background:#a6a6a6;
    border-radius:10px;
    margin:10px;
   
`

const User=styled(Typography)`
    font-size:12px;
    font-weight:700;
    padding:5px 0;
`
const Message=styled(Typography)`
    font-size:14px;
`

const SingleChat=({mes})=>{

    const {user}=useContext(AccountContext);

    return(
        <Box>
        {
            user.sub === mes.senderId?
            <SenderConatiner>
                <User>{mes.sendermail}</User>
                <Message>{mes.text} </Message>
            </SenderConatiner>
            :
            <ReciverContaine>
                <User>{mes.sendermail}</User>
                <Message>{mes.text} </Message>
            </ReciverContaine>
        }  
        </Box>
    );
}
export default SingleChat;