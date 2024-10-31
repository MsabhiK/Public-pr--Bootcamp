import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

    
    const Main = () => {
        const [ message, setMessage ] = useState("Loading...")
        const [products, setProducts] = useState([])
    
    
        useEffect(() => {
            axios.get("http://localhost:8000/api")
            .then(res=>setMessage(res.data.message))     
    
            axios.get("http://localhost:8000/api/products/")
                .then(res => {
                    console.log(res.data)
                    setProducts(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    
        }, [])
    
    
    
    
    return (
        <div className="container">
            <div>
                <h5>Message from the backend: {message}</h5>
            </div>
            <div>
                <h2> All Products List</h2>
                {
                    products.map((oneProduct) => {
                        return (
                            <div key={oneProduct._id}>
                                <Link to={"/products/" + oneProduct._id}>
                                    <h4>{oneProduct.title}</h4>
                                </Link>
                                <h3>Title: {oneProduct.title}</h3>
                                <p>Price: {oneProduct.price} dinars(dt)</p>
                                <p>Description : {oneProduct.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Main

