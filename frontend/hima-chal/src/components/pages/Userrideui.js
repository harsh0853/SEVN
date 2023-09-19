import React from 'react'
import './Userrideuicss.css'
import MapContainer from './defaultmap'
export default function Userrideui() {
    return (
        <>
            <div className="container-fluid cont">
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row map">
                        <MapContainer/>    
                    </div>
                    <br></br><br></br>
                    <div className="row">
                        <div className="row">
                            <span className="la1">Review your ride</span>
                        </div>
                        <div className="row">
                            <div className="col-sm-5 col1">
                                <div className="row">
                                    <template>
                                        <div>
                                            
                                        </div>
                                    </template>
                                </div>
                            </div>
                            <div className="col-sm-6">

                            </div>
                            <div className="col-sm-1">
                                <img src="/sosfinal.png" style={{width:'120px',height:'120px'}}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
            </div>
        </>
    )
}
