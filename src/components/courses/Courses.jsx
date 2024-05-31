import React from 'react';

const headerStyle = {
  backgroundImage: 'url("data:image/jpeg;base64,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")',
  padding: '20px',
  backgroundSize: 'cover',
  textAlign: 'center',
  color: '#000',
  fontFamily: 'Arial, sans-serif',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
};

const bodyStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1445346753792-6c667d917349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed', 
    margin: '0', 
    padding: '0', 
  };

const lectureStyle = {
  fontFamily: 'Arial, sans-serif',
  maxWidth: '800px',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ddd',
  borderRadius: '4px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
  borderBottom: '2px solid #00bcd4',
  paddingBottom: '10px',
};

const strongStyle = {
  fontWeight: 'bold',
};

const Courses = () => {
  return (
    <div style={bodyStyle}>
      <header style={headerStyle}>
        <h1>Environmental Science  Course</h1>
      </header>
      <div style={lectureStyle}>
        <h2 style={headingStyle}>Introduction</h2>
        <p>
          In the field of <strong style={strongStyle}>Environmental Science</strong>, it is crucial to differentiate between <strong style={strongStyle}>wet</strong> and <strong style={strongStyle}>dry waste</strong> as they have distinct characteristics and require different disposal methods. Let's explore these two categories in detail.
        </p>

        <h2 style={headingStyle}>Dry Waste</h2>
        <p>
          <strong style={strongStyle}>Dry waste</strong> consists of materials that do not decompose easily. This category includes items like plastic, paper, glass, metals, and old gadgets. Some key points about dry waste are:
        </p>
        <ul>
          <li>It includes non-biodegradable materials.</li>
          <li>Dry waste persists in the environment for a long time.</li>
          <li>Proper management involves sorting, collecting, and recycling.</li>
          <li>Recycling dry waste reduces the need for new raw materials and conserves resources.</li>
          <li>Inadequate management can lead to littering, pollution, and harm to wildlife.</li>
        </ul>

        <h2 style={headingStyle}>Wet Waste</h2>
        <p>
          <strong style={strongStyle}>Wet waste</strong>, also known as organic waste, consists of materials that can rot or decay naturally. This category includes food scraps, leaves, and organic waste from gardens. Key points about wet waste are:
        </p>
        <ul>
          <li>It includes biodegradable materials that decompose through microbial action.</li>
          <li>Proper management methods include segregation, composting, or conversion into biogas.</li>
          <li>Composting wet waste reduces landfill pressure and produces nutrient-rich soil amendments.</li>
          <li>When managed correctly, wet waste can be a valuable resource for sustainable agriculture.</li>
        </ul>

        <h2 style={headingStyle}>Conclusion</h2>
        <p>
          Understanding the difference between wet and dry waste is essential for responsible waste management. By practicing proper disposal methods and recycling, we can contribute to a cleaner and more sustainable environment.
        </p>
        
      </div>
      
    </div>
    

    
  );
};

export default Courses;