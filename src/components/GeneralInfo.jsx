function GeneralInfo({generalInfo, setGeneralInfo}) {
    

    function handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;
        console.log(name)
        console.log(value)
        setGeneralInfo({
            ...generalInfo,[name]:value
        })   
    }

    return (
        <div>
            <h2>General Info</h2>
            <form action="">
                <input type = "text" placeholder="Name" name= "fullName" value={generalInfo.fullName} onChange={handleChange} /> 
                <input type="email" placeholder="eample@123" name = "email" value={generalInfo.email} onChange={handleChange} />
                <input type="number" placeholder="123456789" name="phoneNumber" value={generalInfo.phoneNumber} onChange={handleChange} />
                <input type="text" placeholder="123djcjdcbdsbc" name="address" value={generalInfo.address} onChange={handleChange} />
            </form>
        </div>
    )
}

export default GeneralInfo;