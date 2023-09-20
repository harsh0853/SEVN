import React, { useState } from 'react';
import "./Navbarcss.css";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
export default function Navbar() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    return (
        <>
            <nav className="navbar nav1">
                <div className="container-fluid">
                    <a className="navbar-brand ms-4" href="#">
                        <motion.img src="/Logo_final.png" width="40" height="40" className="im1" animate={{ opacity: 1, scale: 3 }}
                            transition={{ duration: 2 }}></motion.img>
                        <span className="text1">    Hima-</span><span className="text2">chal</span>
                    </a>
                    {!isOffcanvasOpen && (
                        <button className="navbar-toggler" type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#navbarOffcanvas"
                            aria-controls="navbarOffcanvas"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={toggleOffcanvas}
                            style={{ background: 'transparent' }}
                        >
                            <div className="row i1">
                                <i className="bi bi-list nav navbar-toggler-icon white-stripes" style={{ width: '30px' }}></i>
                            </div>
                            <div className="row i1">
                                <i className="bi bi-list nav navbar-toggler-icon white-stripes" style={{ width: '30px' }}></i>
                            </div>
                            <div className="row i1">
                                <i className="bi bi-list nav navbar-toggler-icon white-stripes" style={{ width: '30px' }}></i>
                            </div>
                        </button>
                    )}
                    <div className={`offcanvas offcanvas-end${isOffcanvasOpen ? ' show' : ''}`} id="navbarOffcanvas"
                        tabIndex="-1" aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header justify-content-end">
                            <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleOffcanvas}></button>
                        </div>
                        <div className="offcanvas-body text-white">
                            <div className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <div className="row rc1">
                                    <Link style={{ textDecoration: 'none' }}><span className="sp">Home</span></Link>
                                </div>
                                <div className="row rc1">
                                    <Link to="/Landingpage" style={{ textDecoration: 'none' }}><span className="sp">About Us</span></Link>
                                </div>
                                <div className="row rc1">
                                    <Link to="/Login1" style={{ textDecoration: 'none' }}><span className="sp">Login</span></Link>
                                </div><div className="row rc1">
                                    <span className="sp">Light Mode:</span>
                                    <span><div class="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    </div></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

