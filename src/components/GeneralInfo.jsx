function GeneralInfo({ generalInfo, setGeneralInfo }) {
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  }

  return (
    <div>
      <h2>General Info</h2>
      <form action="">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Name"
            name="fullName"
            value={generalInfo.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@123.com"
            name="email"
            value={generalInfo.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="123456789"
            name="phoneNumber"
            value={generalInfo.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="123 Main St"
            name="address"
            value={generalInfo.address}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default GeneralInfo;
