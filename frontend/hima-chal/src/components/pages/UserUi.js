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
                                        <label for="exampleInputEmail1" className="la1">Select your ride</label>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <img src="/carimagefinal.png" style={{ width: '40px', height: '40px' }}></img>
                                        </div>
                                        <div className="col-sm-11">
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">

                                    <div className="row">
                                        <label for="exampleInputEmail1" className="la1">Select your Destination</label>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <img src="/mapspic.png" style={{ width: '50px', height: '40px' }}></img>
                                        </div>
                                        <div className="col-sm-11">
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: '100%' }} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14961.605118651885!2d85.89982491534427!3d20.3663382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694925879769!5m2!1sen!2sin" style={{ width: '100%', height: '80vh', border: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <span className="la1">Ride Details</span>
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
