import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

    
const Main = () => {
    const [authors, setAuthors] = useState([])
    const { id } = useParams();
    console.log(id)
    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/")
            .then(res => {
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    
    }, [])
    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then(res => {
                console.log("This author is Deleted")
                const filteredAuthors = authors.filter((eachAuthor) => {
                    return eachAuthor._id !== id;
                });
                setAuthors(filteredAuthors);
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-start bd-highlight mb-2 my-2">
                <div className="badge bg-info text-light p-2 bd-highlight">
                    <h4><Link to="/authors/create">Add an Author ➕</Link></h4>
                    <h3>We have quotes by: </h3>
                </div>
            </div>
            <table className="table table-striped mx-3">
            <thead className="bg-secondary">
                <tr>
                    <th scope="col">Author's Name</th>
                    <th scope="col"> Actions avaliable </th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map((oneAuthor) => {
                        return (
                            <tr key={oneAuthor._id}>
                                <td>{oneAuthor.name}</td>
                                <td>
                                    <Link to={"/authors/" + oneAuthor._id + "/update"}>Edit</Link> |
                                     <button className="btn btn-danger" onClick={() => { deleteAuthor(oneAuthor._id) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
            
        </div>


        
    )
}

export default Main

