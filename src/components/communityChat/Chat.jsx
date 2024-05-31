import styled from "@emotion/styled";
import { Box, Typography, Dialog, Button } from "@mui/material"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import InputBase from '@mui/material/InputBase';
import SingleChat from "./SingleChat";
import { useContext, useEffect, useState } from "react";
import { AddMessage,GetMessage } from "../../api/api";
import { AccountContext } from "../../context/AccountProvider";

const TitleContainer = styled(Box)`
  border-bottom: 1px solid black;
  background: #abaaa9;
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Typography)`
  font-size: 20px;
  padding: 10px 10px;
`;

const ChatContainer = styled(Box)`
  height: calc(100vh - 24px);
`;

const MessageContainer = styled(Box)`
  background: #abaaa9;
  display: flex;
  padding: 20px;
  
`;

const InputStyled = styled(InputBase)`
  border-radius: 15px;
  padding: 8px 5px 8px 20px;
  background: white;
  margin: 0 40px 0 0;
`;

const SendButton = styled(KeyboardDoubleArrowRightIcon)`
  color: white;
  padding: 10px;
`;

const SendContainer = styled(Box)`
  background: #138c03;
  border-radius: 15px;
`;

const Chat = ({ open, setChat }) => {
  
  const [message,setMessage]=useState();

  const [savedMessage,setSavedMessage]=useState([]);

  const [incomingMessage,setIncomingMessage]=useState({});

  const [newMessageFlag,setNewMessageFlag]=useState(false);

  const {user,socket}=useContext(AccountContext);

  const dialogChat = {
        width: 360,
        height: '100%',
        position: "absolute",
        left: 0,
        top: 0
    };

    const handleClose = () => {
        setChat(false);
    }
    const handelMessage=(event)=>{
      setMessage(event.target.value);
    }
    const handlePostMessage=async()=>{
      const messag={
        senderId:user.sub,
        sendermail:user.email,
        type:"text",
        text:message
      }
      socket.current.emit("sendMessage",messag);

      await AddMessage(messag);

      setMessage("");
      setNewMessageFlag(prev => !prev);
      
    }

    useEffect(()=>{
      const getMessages=async()=>{
        const response=await GetMessage();
        setSavedMessage(response);
      }
      getMessages();
    },[message]);

    useEffect(()=>{
      socket.current.on("broadcastMessage",data=>{
        
         setIncomingMessage(data);
      })  

     },[socket,newMessageFlag]);

    useEffect(()=>{
      incomingMessage  && setSavedMessage(prev => [...prev,incomingMessage]);
    },[incomingMessage]);



    return (
        <Dialog
            hideBackdrop={true}
            open={open}
            onClose={handleClose}
            PaperProps={{style:dialogChat}}
            
        >
            <TitleContainer>
                <Title>Community Chat</Title>
                <Button onClick={handleClose}>X</Button>
            </TitleContainer>

            <ChatContainer>
              {savedMessage && savedMessage.map((message, index) => (
                <SingleChat key={index} mes={message} />
              ))}
            </ChatContainer>


            <MessageContainer>
                <InputStyled placeholder="Write your message here...." onChange={handelMessage} value={message}></InputStyled>
                <SendContainer>
                    <SendButton onClick={handlePostMessage}></SendButton>
                </SendContainer>
            </MessageContainer>
            
        </Dialog>
    );
};

export default Chat;
