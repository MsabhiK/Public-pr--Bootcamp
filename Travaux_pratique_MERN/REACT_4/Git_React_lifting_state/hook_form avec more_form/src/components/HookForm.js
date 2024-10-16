import React, { useState } from  'react';
    
const HookForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");

    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");  

    const [confpassword, setConfpassword] = useState(""); 
    const [confpasswordError, setConfpasswordError] = useState("");

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length !==0 && e.target.value.length < 2) {
            setFirstnameError("First name must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setFirstnameError("");
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length !==0 && e.target.value.length < 2) {
            setLastnameError("Last name must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setLastnameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length !==0 && e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length !==0 && e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }
    }

    const handleConfpassword = (e) => {
        setConfpassword(e.target.value);
        if(e.target.value.length!==0 && e.target.value!== password) {
            setConfpasswordError("Passwords do not match!");
        } else {
            // an empty string is considered a "falsy" value
            setConfpasswordError("");
        }
    }
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstname, lastname, email, password, confpassword }; 
        console.log("Welcome", newUser);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfpassword("");
    };
    
    return(
        <div className="container">
            <form onSubmit={ createUser }>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">First name:</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" onChange={ handleFirstname } />
                        {firstnameError ? <p className='text-danger'>{firstnameError}</p> : ""}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Last name:</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" onChange={ handleLastname } />
                        {lastnameError ? <p className='text-danger'>{lastnameError}</p> : ""}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-3">
                        <input type="email" className="form-control" onChange={ handleEmail } />
                        {emailError ? <p className='text-danger'>{emailError}</p> : ""}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-3">
                        <input type="password" className="form-control" onChange={ handlePassword } />
                        {passwordError ? <p className='text-danger'>{passwordError}</p> : ""}
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Confirm Password:</label>
                    <div className="col-sm-3">
                        <input type="password" className="form-control" onChange={ handleConfpassword } />
                        {confpasswordError ? <p className='text-danger'>{confpasswordError}</p> : ""}
                    </div>
                </div>
            </form>
            <div className="col mb-3">
                <h4 className="d-flex justify-content-between p-3">Your Form Data:</h4>
                <p className="col-sm-2 col-form-label">First name:  {firstname}</p>
                <p className="col-sm-2 col-form-label">Last name:  {lastname}</p>
                <p className="col-sm-2 col-form-label">Email:  {email}</p>
                <p className="col-sm-2 col-form-label">Password:  {password}</p> 
                <p className="col-sm-2 col-form-label">Confirm Password:  {confpassword}</p>  
            </div>
        </div>    
        
    )
};
    
export default HookForm;


