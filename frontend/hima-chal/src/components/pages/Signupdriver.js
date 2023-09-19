import React from 'react'
import './Signupdrivercss.css'
export default function Signupdriver() {
    return (
        <>
            <div className="container-fluid c1">
                <br></br><br></br>
                <div className="container c2">
                    <br></br>
                    <br></br>
                    <div className="row ro1">
                        <div className="col-sm-3">
                        </div>
                        <div className="col-sm-6 r1">
                            <div className="container">
                                <form>
                                    <span className="t1">Sign Up</span>
                                    <br></br>
                                    <br></br>
                                    <div className="row">
                                        <label htmlFor="exampleInputEmail1">Name*</label>
                                        <br></br>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" />
                                            </div>
                                        </div>
                                    </div><br></br>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address*</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div><br></br>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password*</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div><br></br>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Contact*</label>
                                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter contact number" />
                                    </div><br></br>
                                    <div className="row">
                                        <label htmlFor="exampleInputEmail1">Vehicle Details*</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Regd No." />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Chassis No." />
                                        </div>
                                    </div><br></br>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Model" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insurance Company" />
                                        </div>
                                    </div><br></br>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="DL No." />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="RC No." />
                                        </div>
                                    </div><br></br>
                                    <div className="row">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                    <br></br>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-3">

                        </div>
                    </div>
                    <br></br><br></br>
                </div>
            </div>
        </>
    )
}
