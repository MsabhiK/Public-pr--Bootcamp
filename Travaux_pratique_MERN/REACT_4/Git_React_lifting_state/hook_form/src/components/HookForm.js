import React, { useState } from  'react';
    
const HookForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confpassword, setConfpassword] = useState(""); 
    
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
                        <input type="text" className="form-control" onChange={ (e) => setFirstname(e.target.value) } />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Last name:</label>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" onChange={ (e) => setLastname(e.target.value) } />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-3">
                        <input type="email" className="form-control" onChange={ (e) => setEmail(e.target.value) } />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-3">
                        <input type="password" className="form-control" onChange={ (e) => setPassword(e.target.value) } />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-3">
                        <input type="password" className="form-control" onChange={ (e) => setConfpassword(e.target.value) } />
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


