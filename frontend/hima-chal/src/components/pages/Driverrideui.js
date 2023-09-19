import React, { useState } from 'react'
import './Driverridecss.css'
import MapContainer from './defaultmap';
export default function Driverrideui() {
    const [count, setCount] = useState(0);


    return (
        <>
            <div className="container-fluid cont text-dark text-dark">
                <br></br><br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                        <MapContainer/>    
                        </div>
                        <div className="col-sm-1">

                        </div>
                        <div className="col-sm-5">
                            <div className="row">
                                <div class="form-group">
                                    <label for="exampleInputEmail1 " className="la1 text-dark">Seats currently occupied</label>
                                    <div className="row">
                                        <div className="col-sm-11">
                                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={count} />
                                        </div>
                                        <div className="col-sm-1">
                                            <button onClick={() => setCount(count + 1)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1" className="la1 text-dark">Upcoming Passengers</label>
                                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div><br></br>
                            <div className="row">
                                <span className="la1">
                                    Ride Update
                                </span>
                                <br></br>
                                <br></br>
                                <div className="row update">
                                    <h5>Broadcast your status to users.</h5>
                                    <textarea placeholder='Default:Normal'>

                                    </textarea>
                                </div>
                            </div>
                            <br></br><br></br>
                            <div className="row">
                                <button type="button" class="btn btn-outline-danger">Stop Ride</button>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br>
                </div>
            </div>
        </>
    )
}
