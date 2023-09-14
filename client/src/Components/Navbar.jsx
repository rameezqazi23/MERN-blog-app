import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <main>
            <header>
                <a href='/' className='logo'>BlogPulse</a>
                <nav>
                    <a href='/signin' className='login'>Login</a>
                    <a href='/signup' className='register'>Register</a>
                </nav>
            </header>
        </main>
    )
}

export default Navbar
