function Experience({ experience, setExperience }) {
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setExperience({
      ...experience,
      [name]: value,
    });
  }

  return (
    <div>
      <h2>Experience</h2>
      <form>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Company Name"
            value={experience.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Position"
            value={experience.position}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={experience.description}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Experience;
