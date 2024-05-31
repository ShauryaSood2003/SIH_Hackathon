import React, { useContext } from "react";
import { Dialog } from "@mui/material";
import IndivisualCourses from "./IndivisualCourses";
import { AIimageUrl,MlimageUrl,UIUXimageUrl } from "../../info/Data";
import { AccountContext } from "../../context/AccountProvider";

const CoursesDialog = ({ open, setOpenCourse }) => {
  const {setCourseOpen}=useContext(AccountContext);

  const dialogStyles = {
    position: "absolute",
    left: "43%",
    top: "8%",
    width: "30%", 
    height: "300px",
    zIndex: 2,
  };
  const handelOpenCource=()=>{
    setCourseOpen(true);
  }

  return (
    <Dialog
      PaperProps={{
        style: dialogStyles, 
      }}
      hideBackdrop={true}
      open={open}
      onClose={() => {
        setOpenCourse(false);
      }}
    >
      <IndivisualCourses
        dialogimg="https://i.imgur.com/XP4HS4G.png"
        text="Environmental Science"
        onClick={handelOpenCource}
        content="In the field of Environmental Science , it is crucial to differentiate betweenwet and dry waste  as they have distinct characteristics and require different disposal methods."
      />
      <IndivisualCourses
        dialogimg={AIimageUrl}
        text="Artificial Intelligence"
        content="Artificial intelligence is the science of making machines that can think like humans. It can do things that are considered smart."
      />
      <IndivisualCourses
        dialogimg={MlimageUrl}
        text="Machine Learning"
        content="Machine learning is a branch of AI and computer science which focuses on the use of data and algorithms to imitate the way that humans learn."
      />
      <IndivisualCourses
        dialogimg={UIUXimageUrl}
        text="Artificial Intelligence"
        content="UX design involves managing the user journey as they interact with a product or service, while UI design focuses on the actual construction of that product or service's interface."
      />
      
    </Dialog>
  );
};

export default CoursesDialog;
