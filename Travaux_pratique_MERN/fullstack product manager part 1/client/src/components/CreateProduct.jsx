import axios from 'axios'
import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'

const CreateProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        const tempObj = {
            title,
            price,
            description,
        }
        axios.post("http://localhost:8000/api/product/", tempObj)
        .then(res => {
            console.log(res.data)
            setTitle("")
            setPrice("")
            setDescription("")
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
                <h1 className='text-success text-center fs.1 text'>Product Manager: CREATE</h1>
                <form onSubmit={submitHandler}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <div className="form-group mb-3">
                        <label className="form-label">Title:</label>
                        <input value={title} type="text" className='form-control' onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Price:</label>
                        <input value={price} type="number" className='form-control' onChange={e => setPrice(e.target.value)} />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Description:</label>
                        <input value={description} type="text" className='form-control' onChange={e => setDescription(e.target.value)} />
                    </div>
                    <input type="submit" value="Add Product" />
                </form>
            </div>
        )
}

export default CreateProduct


