import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Final from './components/Final';
import { Steps } from 'antd';
function App() {
  
  const [page,setPage] = useState(0);
  const [profile,setProfile]= useState([]);
  const [education,setEducation]= useState([]);
  const [experience,setExperience] = useState([]);
  
  const handleNext=()=>{
    setPage(page+1)
    
  }
  console.log("page",page);
  console.log("profile",profile);


  let Details = ()=>{
    switch (page) {
      case 0:
          return <Profile handleNext={handleNext} setProfile={setProfile} />;
      case 1:
          return <Education  handleNext={handleNext} setEducation={setEducation}/>;
      case 2:
       return <Experience  handleNext={handleNext} setExperience={setExperience}/>;
       case 3:
       return <Final profile={profile} education={education} experience={experience} setPage={setPage} />;
}
  }
    
 
  return(<>
  <div style={{ maxWidth: "800px", margin: "10px auto",padding:"20px 10px" }}>
  <Steps
    current={page}
    items={[
      {
        title: 'step 1',
        
      },
      {
        title: 'step 2',
      },
      {
        title: 'step 3',
      },
      {
        title: 'step 4',
      },
    ]}
  />
  </div>


    <Details/>

  </>)
  
}

export default App;
