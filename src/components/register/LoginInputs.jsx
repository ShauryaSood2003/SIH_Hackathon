import React from 'react';
import { Box, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import styled from '@emotion/styled';

const Container=styled(Box)`
    margin:5% 15%; 
`

const InputConatiner=styled(Box)`
    border-bottom:1px solid black;
    width:95%;   
    margin-top:4%;
`
const InputStyled=styled(InputBase)`
    padding:5px 2px 5px 15px;
`


const LoginInput = ({ label, place, icon: Icon }) => {
  return (
    <Container>
      <Typography>{label}</Typography>
      <InputConatiner>
        <Icon />
        <InputStyled placeholder={place} />
      </InputConatiner>
    </Container>
  );
};

export default LoginInput;
