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
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand ms-4" href="#">
                        <motion.img src="/Logo_final.png" width="40" height="40" className="im1" animate={{ opacity: 1, scale:3}}
                            transition={{ duration:2 }}></motion.img>
                           <span className="text1">    Hima-</span><span className="text2">chal</span>
                    </a>
                    {!isOffcanvasOpen && (
                        <button className="navbar-toggler toggle-btn" type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#navbarOffcanvas"
                            aria-controls="navbarOffcanvas"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={toggleOffcanvas}
                        >
                            <i className="bi bi-list nav navbar-toggler-icon toggle-btn" style={{ height: '30px', width: '30px' }}></i>
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
                                <Link style={{ textDecoration: 'none' }}><span className="sp">Home</span></Link>
                                <Link to="/Landingpage" style={{ textDecoration: 'none' }}><span className="sp">About Us</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

