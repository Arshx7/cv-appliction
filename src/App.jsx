import React from "react";
import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Display from "./components/Display";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "Arshakh Haneen",
    email: "asrggg@gmail.com",
    phoneNumber: "27272727277",
    address: "kmsdhbhib ahbhabh hqwbh",
  });

  const [education, setEducation] = useState({
    school: "kmea engineering",
    degree: "Btech",
    startDate: "2020/01/20",
    endDate: "2024/01/20",
    location: "kochi",
  });

  const [experience, setExperience] = useState({
    companyName: "shelooo",
    position: "senior",
    startDate: "2024/07/24",
    endDate: "2025/07/24",
    description:
      "Responsible for managing a team of 5, overseeing project timelines, and ensuring client satisfaction.",
  });

  return (
    <>
      <h1>CV Application</h1>
      <div className="container">
        <div className="formContainer">
          <GeneralInfo
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
          />
          <Education education={education} setEducation={setEducation} />
          <Experience experience={experience} setExperience={setExperience} />
        </div>
        <div className="displayContainer">
          <Display
            generalInfo={generalInfo}
            education={education}
            experience={experience}
          />
        </div>
      </div>
    </>
  );
}
export default App;
