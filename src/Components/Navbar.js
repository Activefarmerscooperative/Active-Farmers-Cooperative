import React, { useState } from 'react';
import logo from '../assets/logol.png';
// import a from "react-anchor-link-smooth-scroll";
import { Icon } from '@iconify/react';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };

    const closeMobileMenu = () => setClicked(false);

  
    return (
     
        <nav>
            <div className="d-flex align-items-center justify-content-between nav" >
                <div className="d-flex align-items-center justify-content-between logo">
                    <a href="#home"> <img src={logo} alt="logo" /> </a>
                    <ul className={clicked ? "#navlinks active" : "#navlinks"} id="navlinks" >
                        <li>
                            <a href='#about' onClick={closeMobileMenu}>About Us</a>
                        </li>
                        <li>
                            <a href='#solution' onClick={closeMobileMenu}>Solutions</a>
                        </li>
                        <li>
                            <a href='#impact' onClick={closeMobileMenu}>Target</a>
                        </li>
                        <li>
                            <a href='#contact'onClick={closeMobileMenu}>Contact Us</a>
                        </li>

                        <div className="d-flex flex-column align-items-center justify-content-between nav-btn-mobile">
                            <a href="https://active-farmers-dashboard.netlify.app/" target="_blank" rel="noreferrer">
                                <button className="btn register" onClick={closeMobileMenu}>Register</button>
                            </a>
                            <a href="https://active-farmers-dashboard.netlify.app/" target="_blank" rel="noreferrer">
                                <button className="btn login" onClick={closeMobileMenu}>Login</button>
                            </a>
                        </div>

                    </ul>

                </div>

                <div  className="d-flex align-items-center justify-content-between nav-btn-desktop">
                    <a href='https://active-farmers-dashboard.netlify.app/' target="_blank" rel="noreferrer">
                        <button className="btn register" onClick={closeMobileMenu}>Register</button>
                    </a>
                    <a href='https://active-farmers-dashboard.netlify.app/' target="_blank" rel="noreferrer">
                        <button className="btn login" onClick={closeMobileMenu}>Login</button>
                    </a>
                </div>
                <div id="mobile" onClick={handleClick}>
                <Icon icon= {clicked ? "jam:close" : "ci:menu-alt-02"} className='bar' />
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
