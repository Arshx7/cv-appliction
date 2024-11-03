function Education({education, setEducation}) {
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setEducation({
            ...education,[name]:value
        })
    }

    return (
        <div>
            <h2>Education</h2>
            <form>
                <input type="text" name="school" placeholder="School Name" value={education.school} onChange={handleChange} />
                <input type="text" name="degree" placeholder="Degree" value={education.degree} onChange={handleChange} />
                <input type="date" name="startDate" value={education.startDate} onChange={handleChange} />
                <input type="date" name="endDate" value={education.endDate} onChange={handleChange} />
                <input type="text" name="location" placeholder="Location" value={education.location} onChange={handleChange} />
            </form>
        </div>
    );
}

export default Education