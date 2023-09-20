
import './Userrideuicss.css'
import MapContainer from './defaultmap'
import ReactStars from "react-rating-stars-component";
import React from "react";

export default function Userrideui() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <div className="container-fluid cont">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row map">
                        <MapContainer />
                    </div>
                    <br></br><br></br>
                    <div className="row">
                        <div className="row">
                            <span className="la1" style={{ color: 'white' }}>Review your ride</span>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 col1">
                                <div className="row">
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={30}
                                        activeColor="#ffd700"
                                    />
                                </div><br></br>
                                <div className="row">
                                    <label style={{ fontWeight: 'bold' }}>Write your review</label>
                                    <div className="row">
                                        <textarea placeholder='Comments....' className="inp" style={{ margin: '3%' }}>

                                        </textarea>
                                    </div>
                                </div><br></br>
                                <div className="row">
                                    <div className="col-sm-9">

                                    </div>
                                    <div className="col-sm-3">
                                        <button className="btn btn-outline-success">Submit</button>
                                    </div>
                                </div><br></br>
                            </div>
                            <div className="col-sm-6">

                            </div>
                            <div className="col-sm-1">
                                <img src="/sosfinal.png" style={{ width: '120px', height: '120px' }}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
            </div>
        </>
    )
}
