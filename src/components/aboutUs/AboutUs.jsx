import React from 'react'

const headStyle={
  maxWidth: 'fit-Content',
  color: 'white',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  borderRadius: '3rem',
  backgroundColor: 'orangered',
  fontFamily: 'Verdana',
  fontSize: '3rem',
  textAlign: 'center',
}

const containerStyle={
  backgroundColor: 'rgb(250,250,250)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign:'center',
  alignItems: 'center',
  marginTop: '5vh' ,
  marginBottom: '5vh' ,
  marginLeft: '15vw',
  marginRight: '15vw',
  gap: '2.5rem',
  padding: '2rem 0.5rem',
  borderRadius: '1.5rem',
  boxShadow:'5px 5px 15px black'
}
const contentStyle={
  display: 'flex',
  // border: '1px solid black',
  flexDirection: 'column',
  fontSize: '1.5rem',
  justifyContent: 'left',
  listStyle: 'none',
  width: '75%',
  gap: '2rem',
  fontFamily: 'Verdana',
  padding:'1rem 0rem'
}

const AboutUs = () => {
  return (
    <>
    <hr></hr>
    <div style={containerStyle}>
      <div style={headStyle}>
        About Us
      </div>
      <div style={contentStyle}>
        <p>Our education portal, designed with a deep commitment to addressing the educational needs of rural and underprivileged students, serves as a transformative platform. In regions often lacking access to quality education, our portal acts as a beacon of hope. It offers a comprehensive range of resources, including video lessons, interactive quizzes, and downloadable study materials, all tailored to suit the unique challenges faced by rural learners.</p>
        <p>Through strategic partnerships and community engagement, we bridge the digital divide by providing free or low-cost access to these resources. Our platform also fosters a supportive learning community, connecting students with mentors and peers, encouraging collaboration and knowledge sharing. By leveraging technology to deliver education, we empower these students with the tools and knowledge needed to break the cycle of poverty, unlock opportunities, and build a brighter future. 
        Together, we are making education a beacon of hope for the underserved, ultimately creating a more equitable society.</p>
      </div>
    </div>
    </>
  )
}

export default AboutUs
