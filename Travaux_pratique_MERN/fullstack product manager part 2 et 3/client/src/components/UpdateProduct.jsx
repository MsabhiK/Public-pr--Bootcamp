import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
    
const UpdateProduct = (props) => {
    const { id } = useParams()
    console.log(id)
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
              console.log(res.data)
              setTitle(res.data.title);
              setPrice(res.data.price);
              setDescription(res.data.description);
            })
    }, [id]);
    
    const updateProduct = e => {
        e.preventDefault();
        const tempObjToSendAndUpdate = {
          title,
          price,
          description
        }
        axios.put('http://localhost:8000/api/products/' + id, tempObjToSendAndUpdate)
            .then(res => {
              console.log(res)
              setTitle("")
              setPrice("")
              setDescription("")
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
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price:</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description:</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default UpdateProduct;



