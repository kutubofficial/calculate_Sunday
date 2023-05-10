import React, { useState } from "react";
import './UserDetails.css';
const UserDetails = ({ onNext }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const [allEntery, setAllEntry] = useState([]);


  const handleSubmit = event => {
    event.preventDefault();
    const newEntry = { Name: name, email: email, gender: gender, DOB: dob, Mobile: mobile };
    setAllEntry([...allEntery, newEntry]);
    console.log(newEntry);
    onNext({ name, email, gender, dob, mobile });
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleGenderLChange = (e) => {
    setGender(e.target.value);
  };
  const handleDobChange = (e) => {
    setDob(e.target.value);
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="main-div">
          <h2>User Details</h2>
        </div>
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" value={name} id="name" onChange={handleNameChange}  required/>
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="text" value={email} id="email" onChange={handleEmailChange} required />
        </div>
        <div>
          <label htmlFor="gender">Gender :</label>
          <select id="gender" value={gender} name="gender" onChange={handleGenderLChange} required>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="dob">DOB :</label>
          <input type="date" value={dob} id="date" onChange={handleDobChange} required/>
        </div>
        <div>
          <label htmlFor="mobile">Mobile :</label>
          <input type="number" value={mobile} id="mobile" onChange={handleMobileChange} required/>
        </div>
        <button type="submit">Next</button>
      </form>
    </>
  )
}
export default UserDetails;