import "/src/styles/display.css";

function Display({ generalInfo, education, experience }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
    });
  };

  return (
    <div className="main-container">
      <div className="header">
        <h2 className="fullName">{generalInfo.fullName}</h2>
        <p className="subheading">{generalInfo.address}</p>
      </div>

      <div className="section aboutMe">
        <h3 className="section-title">Contact Information</h3>
        <p>
          <strong>Email:</strong> {generalInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {generalInfo.phoneNumber}
        </p>
      </div>

      <div className="section">
        <h3 className="section-title">Education</h3>
        <div className="details">
          <p className="degree">{education.degree}</p>
          <p className="date-range">
            {formatDate(education.startDate)} - {formatDate(education.endDate)}
          </p>
          <p className="institution">
            {education.school}, {education.location}
          </p>
        </div>
      </div>

      <div className="section">
        <h3 className="section-title">Experience</h3>
        <div className="details">
          <p className="company">{experience.companyName}</p>
          <p className="position">{experience.position}</p>
          <p className="date-range">
            {formatDate(experience.startDate)} -{" "}
            {formatDate(experience.endDate)}
          </p>
          <p className="responsibilities">{experience.description} </p>
        </div>
      </div>
    </div>
  );
}

export default Display;
