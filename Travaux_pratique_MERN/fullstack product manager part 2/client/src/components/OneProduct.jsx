import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const OneProduct = (props) => {
    const { id } = useParams();
    console.log(id)
    const [thisProduct, setThisProduct] = useState(null)

    useEffect(() => {
      axios.get('http://localhost:8000/api/products/' + id)
          .then(res => {
                  console.log(res.data)
                  setThisProduct(res.data)
                })
          .catch(err => console.error(err));
  }, [id]);
/*
 <h2>OneProduct: {id}</h2>
            <div>
              <h3>Title: {thisProduct.title}</h3>
              <p>Price: {thisProduct.price}</p>
              <p>Description: {thisProduct.description}</p>
            </div>   
*/
  return (
        <div className="MainContent">
          <div>
            OneProduct :  {id}
            {
                thisProduct ? (
                    <>
                        <h2>
                            {thisProduct.title}
                        </h2>
                        <h4>
                            {thisProduct.price}
                        </h4>
                        <h4>
                            {thisProduct.description}
                        </h4>
                    </>
                ) : <h1>Loading...</h1>
            }

          </div>
        </div>
  )
}

export default OneProduct

