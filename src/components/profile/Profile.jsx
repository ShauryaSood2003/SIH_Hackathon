import React, { useContext } from 'react' 
import { AccountContext } from '../../context/AccountProvider'
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import ProfileItem from './ProfileItems';
import { AIimageUrl,MlimageUrl,UIUXimageUrl } from '../../info/Data';

const Container=styled(Typography)`
  margin:5% 10%;
`

const Content1=styled(Typography)`
  font-size:25px;
  font-weight:700;
  
  
  padding:10px 0;
 
`
const Title=styled(Typography)`
  font-size:30px;
  font-weight:700;
  margin-top:5%;
`
const Content2=styled(Box)`
  font-size:25px;
  font-weight:700;
  
  padding:10px 0;
  
`
const DetailContainer=styled(Box)`
  margin:2% 6%;
`
const FlexContainer=styled(Box)`
  display:flex;
`

const Profile = () => {
    const {user}=useContext(AccountContext);

    const ImageStyle={
      width:200,
      height:200,
      borderRadius:"50%",
      padding:10
    }
  return (
   <>
   <hr></hr>
      <Container>
        <FlexContainer>
          <img style={ImageStyle} src={user.picture} alt="User img"></img>
          <DetailContainer>
            <Content1>UserId: {user.sub}</Content1>
            <Content2>Name: {user.name}</Content2>
            <Content2>Email: {user.email}</Content2>
            <Content1>Points: 100</Content1>
          </DetailContainer>
          
        </FlexContainer>
        <hr></hr>
        <Title>Courses in Progress</Title>
        <FlexContainer>
          <ProfileItem images={AIimageUrl} text1="Artificilal Intelligence" text2="Completed:34%"></ProfileItem>
          <ProfileItem images={MlimageUrl} text1="Machine Learning" text2="Completed:78%"></ProfileItem>
          <ProfileItem images={UIUXimageUrl} text1="UI/UX" text2="Completed:11%"></ProfileItem>
          <ProfileItem images="https://i.imgur.com/XP4HS4G.png" text1="Environmental Science" text2="Completed:69%"></ProfileItem>
        </FlexContainer>
      </Container>
   </>
  )
}

export default Profile;
