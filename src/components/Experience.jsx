function Experience({experience, setExperience}) {
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setExperience({
            ...experience,[name]:value
        })
    }

    return (
        <div>
            <h2>Experience</h2>
            <form>
                <input type="text" name="companyName" placeholder="company Name" value={experience.companyName} onChange={handleChange} />
                <input type="text" name="position" placeholder="position" value={experience.position} onChange={handleChange} />
                <input type="date" name="startDate" value={experience.startDate} onChange={handleChange} />
                <input type="date" name="endDate" value={experience.endDate} onChange={handleChange} />
                
            </form>
        </div>
    );
}

export default Experience