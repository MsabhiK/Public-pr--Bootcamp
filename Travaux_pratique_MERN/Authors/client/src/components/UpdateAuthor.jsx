import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

const UpdateAuthor = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log(res.data)
                //! set all the data from or DB
                setName(res.data.name);
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const UpdateHandler = (e) => {
        e.preventDefault()
        const tempObjToSendAndUpdate = {
            name
        }
        axios.put("http://localhost:8000/api/authors/" + id, tempObjToSendAndUpdate)
            .then(res => {
                console.log(res.data)
                navigate("/")
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
                    <h3>Edit this AUTHOR:</h3>
                </div>
            </div>
            <form onSubmit={UpdateHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className="form-group mb-3">
                        <label className="form-label">Name:</label>
                        <input value={name} type="text" className='form-control' onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <input type="submit" className="btn btn-success me-3" value="Update" />
                    </div>
            </form>
        </div>
    )
}

export default UpdateAuthor
