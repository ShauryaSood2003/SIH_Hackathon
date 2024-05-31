import { Box } from "@mui/material";
import Header from "./components/header/Header";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { useContext } from "react";
import { AccountContext } from "./context/AccountProvider";
import Login from "./components/register/Login";
import HeaderLoggedIn from "./components/header/HeaderLoggedIn";

import LandingPage from "./components/landingPage/LandingPage";
import AboutUs from "./components/aboutUs/AboutUs";
import Profile from "./components/profile/Profile";
import Courses from "./components/courses/Courses";
import Games from "../src/components/games/Games"



function App() {
  const {user,registerOpen,aboutusOpen,profileOpen,courseOpen,gameOpen}=useContext(AccountContext);


  return (
    <Box>
      <GoogleOAuthProvider clientId="958730208708-dkl9k2bm721od4incfjveib1rd9n5uq5.apps.googleusercontent.com">
      {
        registerOpen?
        <Login></Login>
        :
        <Box>
          {
            Object.keys(user).length === 0 ?
            <Header></Header>
            :
            <HeaderLoggedIn></HeaderLoggedIn>
          }
          <>
            {
              aboutusOpen?
              <AboutUs></AboutUs>
              :
              <>
                {
                  profileOpen?
                  <Profile></Profile>
                  :
                  <>
                    {
                      courseOpen?
                      <Courses></Courses>
                      :
                      <>
                        {
                          gameOpen?
                          <Games></Games>
                          :
                          <LandingPage></LandingPage>
                        }
                      </>
                      
                    }
                  </>
                  
                }
                
              </>
              
            }
          </>
           
        </Box>
      }
          
      </GoogleOAuthProvider>
    </Box>
    
  );
}

export default App;
