import React from 'react'
import { Carousel } from 'react-bootstrap'
import { motion } from 'framer-motion';
import "./Landingpagecss.css"
const flipCardWrapAll = document.querySelector("#flip-card-wrap-all")
const cardsWrapper = document.querySelectorAll(".flip-card-3D-wrapper")
const cards = document.querySelectorAll(".flip-card")
let frontButtons = ""
let backButtons = ""

for (let i = 0; i < cardsWrapper.length; i++) {
    frontButtons = cardsWrapper[i].querySelector(".flip-card-btn-turn-to-back")
    frontButtons.style.visibility = "visible"
    frontButtons.onclick = function () {
        cards[i].classList.toggle('do-flip')
    }

    backButtons = cardsWrapper[i].querySelector(".flip-card-btn-turn-to-front")
    backButtons.style.visibility = "visible"
    backButtons.onclick = function () {
        cards[i].classList.toggle('do-flip')
    }
}
export default function Landingpage() {

    return (
        <>
            <Carousel fade controls={false} indicators={false} interval={2000} className="ca1 hero">
                <Carousel.Item>
                    <Carousel.Caption>
                        <motion.h3 className="text" animate={{ opacity: 1, scale: 1.5 }}
                            transition={{ duration: 2.4 }}>Your Journey, Our Track</motion.h3>
                    </Carousel.Caption>
                    <Carousel.Caption>
                        <motion.p className="hero-text" animate={{ opacity: 1, scale: 1.3 }}
                            transition={{ duration: 1.7 }}>Revolutionize Himachal's transit with real time tracking, eco-info, safety reporting, and user feedback, bridging users and drivers for transparent travel.</motion.p>
                    </Carousel.Caption>
                    <img
                        className="d-block w-100 img1"
                        src="https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg"
                        alt="Your Journey, Our Track"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  img1"
                        src="https://blog.redbus.in/wp-content/uploads/2021/03/shutterstock_1340996027-850x568.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <motion.h3 className="text" animate={{ opacity: 1, scale: 1.5 }}
                            transition={{ duration: 2.4 }}>Your Journey, Our Track</motion.h3>
                    </Carousel.Caption>
                    <Carousel.Caption>
                        <motion.p className="hero-text" animate={{ opacity: 1, scale: 1.3 }}
                            transition={{ duration: 1.7 }}>Revolutionize Himachal's transit with real time tracking, eco-info, safety reporting, and user feedback, bridging users and drivers for transparent travel.</motion.p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100  img1"
                        src="https://static2.tripoto.com/media/filter/tst/img/223647/TripDocument/1503678762_img_20170813_111503.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <motion.h3 className="text" animate={{ opacity: 1, scale: 1.5 }}
                            transition={{ duration: 2.4 }}>Your Journey, Our Track</motion.h3>
                    </Carousel.Caption>

                    <Carousel.Caption>
                        <motion.p className="hero-text" animate={{ opacity: 1, scale: 1.3 }}
                            transition={{ duration: 1.7 }}>Revolutionize Himachal's transit with real time tracking, eco-info, safety reporting, and user feedback, bridging users and drivers for transparent travel.</motion.p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container-fluid con2">
                <br></br><br></br>
                <motion.div className='container' initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 6 }}>
                    {/* <div className="row">
                        <p className=" ct">Revolutionize Himachal's transit with real time tracking, eco-info, safety reporting, and user feedback, bridging users and drivers for transparent travel.</p>
                    </div> */}
                    <br></br>
                    <div className="row">
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-outline-success" style={{ width: '100%' }}>Login as User</button>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-outline-success" style={{ width: '100%' }}>Login as Driver</button>
                        </div>
                    </div>

                    <br></br>
                    <div className='row'>
                        <motion.div className="flip-card-3D-wrapper col-md-4 car1" whileHover={{ scale: 1.08 }}>
                            <div className="flip-card">
                                <div className="flip-card-front">
                                    <center> <div className='card-img'><img src="/locationlogo.png" /></div></center><br></br><br></br>
                                    <div className='card-body'>
                                        <h3 className="text-center" style={{ color: 'white' }}>Real-Time Location</h3> <h3 className="text-center" style={{ color: 'rgb(214, 77, 139)' }}>Tracking</h3>
                                        <p className="cb">A quick description of the front item</p>
                                        <button className="flip-card-btn-turn-to-back" style={{ background: 'rgb(39,39,39,0.9)' }}>More info</button>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className='card-body'>
                                        <p className="p1 cb">Users can effortlessly track the real-time location of buses, making trip planning a breeze and minimizing unnecessary waiting time.</p>
                                        <button className="flip-card-btn-turn-to-front">flip</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="flip-card-3D-wrapper col-md-4" whileHover={{ scale: 1.08 }}>
                            <div className="flip-card">
                                <div className="flip-card-front">
                                    <center> <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ6Aw2T_WyQ1xHCLAxX1oyt7XaZljv2wr0b2M6SETrUpDEcsh0kS_19gq0xAAMS9CPaUN3xiEyqx4Y4Y6miD8WCNOKukcp3gX1ho1U32U7JkRPpCGy55EqvVCLjlmnTtkVN1bBaoGxPZ4ewzTbWVk22YGE5lp3yqWs1m8oHLZD0uGHrcJFIg_Df-JIfA/s1600/KatyCaterpillar.jpg" /></center>
                                    <br></br><br></br>
                                    <div className='card-body'>
                                        <h3 className="text-center">Contribution to</h3><h3 className="text-center" style={{ color: 'rgb(214, 77, 139)' }}>Transparency</h3>
                                        <p className="cb">A quick description of the front item</p>
                                        <button className="flip-card-btn-turn-to-back" style={{ background: 'rgb(39,39,39,0.9)' }}>More info</button>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className='card-body'>
                                        <p className="p1 cb">By offering vital data and real-time updates, drivers actively contribute to creating a transparent and accountable public transportation system.</p>
                                        <button className="flip-card-btn-turn-to-front">flip</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="flip-card-3D-wrapper col-md-4" whileHover={{ scale: 1.08 }}>
                            <div className="flip-card">
                                <div className="flip-card-front">
                                    <center> <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZ6Aw2T_WyQ1xHCLAxX1oyt7XaZljv2wr0b2M6SETrUpDEcsh0kS_19gq0xAAMS9CPaUN3xiEyqx4Y4Y6miD8WCNOKukcp3gX1ho1U32U7JkRPpCGy55EqvVCLjlmnTtkVN1bBaoGxPZ4ewzTbWVk22YGE5lp3yqWs1m8oHLZD0uGHrcJFIg_Df-JIfA/s1600/KatyCaterpillar.jpg" /></center>
                                    <br></br><br></br>
                                    <div className='card-body'>
                                        <h3 className="text-center">Comprehensive</h3><h3 className="text-center" style={{ color: 'rgb(214, 77, 139)' }}>Profile</h3>
                                        <p className="cb">A quick description of the front item</p>
                                        <button className="flip-card-btn-turn-to-back" style={{ background: 'rgb(39,39,39,0.9)' }}>More info</button>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className='card-body'>
                                        <p className="p1 cb">Our app empowers drivers to create detailed profiles, showcasing essential information such as vehicle type, emissions compliance, and contact details. This not only fosters trust but also promotes transparency within the transportation network.</p>
                                        <button className="flip-card-btn-turn-to-front">flip</button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                <br></br>
            </div>
            {/* font-family: 'Roboto Mono', monospace; */}
        </>
    )
}