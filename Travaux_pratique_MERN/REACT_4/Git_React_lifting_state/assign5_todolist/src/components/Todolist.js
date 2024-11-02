import React, { useState } from 'react'

const Todolist = (props) => {
    const { list } = props
    const { addJob } = props
    const [activity, setActivity] = useState("")
    const [errorActivity, seterrorActivity] = useState("")
    const [selectedIds, setSelectedIds] = useState([]);

    const handleActivity = (e) => {
        setActivity(e.target.value)
        if (e.target.value.length < 1) {
            seterrorActivity("⛔Activity is required⛔")
        } else if (e.target.value.length < 10) {
            seterrorActivity("❌Activity must be at least 10 characters❌")
        }
        else {
            seterrorActivity("")
        }
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const newJob = { activity }

        addJob(newJob)  //* Lifting State
        //* Reset The Form after submission
        setActivity("")
    }

    

    const handleCheckboxChange = (e) => {
        const checkedId = e.target.value;
        if(e.target.checked){
            setSelectedIds([...selectedIds,checkedId])
        }else{
            setSelectedIds(selectedIds.filter(id=>id !== checkedId))
        }
    }

    const onClickHandler = (e) => {
        const result = list.filter(li => handleCheckboxChange(e) === false);
        console.log(result);
    }

    return (
        <div className='container mt-5'>
            <h3 className="text-center bg-light col-5">Coding Dojo Africa - TODO 🧑‍💻 LIST</h3>
            <form className="mt-3 col-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    {errorActivity ? <p className='text-danger'>{errorActivity}</p> : ""}
                    <label className="form-label">Create a new activity:</label>
                    <input type="text" className='form-control' value={activity} onChange={handleActivity}/>
                </div>

                <input type="submit" value="Add an activity" className='btn btn-primary mt-3' />
            </form>
            <div className="card border-warning bg-light mt-3 col-8">
                <div className="card-body">
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th className='bg-primary'>List of Jobs:</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            list.map((oneJob) => {
                                return (
                                        <tr key={oneJob.activity}>
                                            <td>
                                                <div class="form-check">
                                                    <label className="form-check-label" for="formCheckChecked">{oneJob.activity}</label>
                                                    <input className="form-check-input" type="checkbox" value={oneJob.activity} checked={selectedIds.includes(oneJob.activity)} onChange={(e) => { handleCheckboxChange(e) }} />    
                                                </div>
                                            </td>        
                                        </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <button className="btn btn-danger" onClick={ (e) => onClickHandler }>Delete checked activities</button>
                </div>
            </div>
        </div>
    )
}  

export default Todolist;

