import React from 'react';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Display from './components/Display';
import './App.css';

function App() {


  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "" 
  })

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: ""
    
  })

  

  const [experience, setExperience] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
})

  return (
    <>
    
    <h1>CV Application</h1>
    <div className='container'> 
    
      <div className='formContainer'>
      <GeneralInfo  generalInfo={generalInfo} setGeneralInfo = {setGeneralInfo} />
      <Education education={education} setEducation = {setEducation} />
      <Experience experience={experience} setExperience ={setExperience} />

      </div>
      <div className='displayContainer'>
          <Display  generalInfo ={generalInfo} education ={education} experience={experience} />
      </div>

      


    </div>
    </>
    
  )
}
export default App
