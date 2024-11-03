function Education({ education, setEducation }) {
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setEducation({
      ...education,
      [name]: value,
    });
  }

  return (
    <div>
      <h2>Education</h2>
      <form>
        <div className="form-group">
          <label htmlFor="school">School Name</label>
          <input
            type="text"
            id="school"
            name="school"
            placeholder="School Name"
            value={education.school}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            value={education.location}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Education;
