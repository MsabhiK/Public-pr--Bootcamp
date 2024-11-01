import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const OneProduct = (props) => {
    const { id } = useParams();
    console.log(id)
    const [thisProduct, setThisProduct] = useState(null)
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      axios.get('http://localhost:8000/api/products/' + id)
          .then(res => {
                  console.log(res.data)
                  setThisProduct(res.data)
                })
          .catch(err => console.error(err));
  }, [id])

  const deleteProduct = (id) => {
    axios.delete("http://localhost:8000/api/products/" + id)
        .then(res => {
            console.log("the Product is Deleted")
            const filteredProducts = products.filter((eachProduct) => {
                return eachProduct._id !== id;
            });
            setProducts(filteredProducts);
            navigate("/")
        })
        .catch(err => {
            console.log(err)
        })
}


  return (
        <div className="MainContent">
          <div>
            OneProduct :  {id}
            {
                thisProduct ? (
                    <>
                        <h2>Title: {thisProduct.title}</h2>
                        <h4>Price: {thisProduct.price} dinars(dt)💸</h4>
                        <h4>Description: {thisProduct.description}</h4>
                    </>
                ) : <h1>Loading...</h1>
            }
            <ul className="list-inline">
              <li className="list-inline-item"><Link className=" btn btn-link" to={`/products/${id}/update`}>EDIT</Link></li>
              <li className="list-inline-item"><button className="btn btn-danger" onClick={() => { deleteProduct(id) }}>Delete Movie </button></li>
            </ul>
          </div>
          
        </div>
  )
}

export default OneProduct

