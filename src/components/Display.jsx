import "/src/styles/display.css"

function display({generalInfo, education, experience}) {
    return (
        <div className="main-container">
            <h2 className = "fullName">{generalInfo.fullName}</h2>
            <h3>General Information</h3>

            <div className = "aboutMe">
                <p >{generalInfo.email}</p>
            <p>{generalInfo.phoneNumber}</p>
            </div>
            

            <h3 className="heading">Education</h3>
            <div className="subHeading">
                <p>{education.degree}</p>
            </div>
            <div className="info">
                <p>{education.school}</p>
                <p>{education.location}</p>
            </div>
            <div className="subHeaing date">
                <p>{new Date(education.startDate).toLocaleDateString()}</p>
                <p>{new Date(education.endDate).toLocaleDateString()}</p>               
            </div>
            <h3 className="heading">Experience</h3>
            <div className="subHeading">
            <p>{experience.companyName}</p>
            </div>
            <div className="info">
            <p>{experience.position}</p>
                
            </div>
            <div className="subHeaing date">
            <p>{new Date(experience.startDate).toLocaleDateString()}</p>
            <p>{new Date(experience.endDate).toLocaleDateString()}</p>
            </div>

            
            
            
            

           
            
           
            
        </div>
    );
}

export default display;