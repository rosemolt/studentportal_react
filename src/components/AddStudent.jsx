import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const [data,changeData]=useState({
        "fname":"",
        "lname":"",
        "college":"",
        "dob":"",
        "course":"",
        "mobile":"",
        "email":"",
        "addresss":""
    })
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">First name</label>
                            <input type="text" className="form-control" name='fname' value={data.fname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Last name</label>
                            <input type="text" className="form-control" name='lname' value={data.lname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DOB</label>
                            <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course</label>
                            <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent