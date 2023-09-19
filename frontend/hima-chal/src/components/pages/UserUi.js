import React from 'react'
import "./UserUi.css"
export default function UserUi() {
    return (
        <>
            <div className="container-fluid cont">
                <br></br><br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="row">
                                <div className="form-group">
                                    <div className="row">
                                        <label htmlFor="exampleInputEmail1" className="la1" style={{ color: 'white' }}>Select your ride</label>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <img src="/carimagefinal.png" style={{ width: '40px', height: '40px' }}></img>
                                        </div>
                                        <div className="col-sm-11">
                                            <select className="form-select op" aria-label="Default select example" >
                                                <option ></option>
                                                <option value="1" className="op">Bus</option>
                                                <option value="2" className="op">Other vehicle</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="row">
                                        <label htmlFor="exampleInputEmail1" className="la1" style={{ color: 'white' }}>Select your Destination</label>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <img src="/mapspic.png" style={{ width: '50px', height: '40px' }}></img>
                                        </div>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: '100%' }} />
                                        </div>
                                        <div className="col-sm-2">
                                            <button className="btn btn-success">
                                                <center>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" style={{ color: 'white', width: '160%', height: '160%', fontWeight: 'bolder' }}>
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                </center>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="row">
                                    <label htmlFor="exampleInputEmail1" className="la1" style={{ color: 'white' }}>Avialable Rides</label>
                                    <div className="col-sm-1">

                                    </div>
                                    <div className="col-sm-11 ru">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14961.605118651885!2d85.89982491534427!3d20.3663382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694925879769!5m2!1sen!2sin" style={{ width: '100%', height: '80vh', border: '0px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <span className="la1" style={{ color: 'white' }}>Ride Details</span>
                            <div className="col-sm-12" style={{ width: '100%', height: '20vh', backgroundColor: 'white', borderRadius: '10px' }}>

                            </div>
                        </div>
                    </div>
                    <br></br><br></br>
                </div>
            </div>
        </>
    )
}
