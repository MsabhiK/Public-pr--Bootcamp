import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateAuthor = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const submiTHandler = (e) => {
        e.preventDefault()
        const tempObj = {
            name
        }
        axios.post("http://localhost:8000/api/authors/", tempObj)
            .then(res => {
                console.log(res.data)
                setName("")
                navigate("/");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);

            })

    }
        return (
            <div className='container'>
                <div className="d-flex justify-content-start bd-highlight mb-2 my-2">
                    <div className="badge bg-info text-light p-2 bd-highlight">
                        <h4><Link to="/">Home 🏚️</Link></h4>
                        <h3>Add a new AUTHOR: </h3>
                    </div>
                </div>
                <form onSubmit={submiTHandler}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div className="form-group mb-3">
                        <label className="form-label">Name:</label>
                        <input value={name} type="text" className='form-control' onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="submit" className="btn btn-success me-3" value="Submit" />
                    </div>
                    
                </form>
            </div>
        )
}

export default CreateAuthor


