import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/profile", {
            method: 'GET',
            credentials: 'include',

        }).then((response) => {
            response.json().then((user) => {
                setUserInfo(user.email)

            })
        })
    }, [])

    const handleLogout = async () => {
        const response = await fetch("http://localhost:8000/logout", {
            credentials: 'include',
            method: 'POST',
        })

        if (response.ok) {
            setUserInfo(null)
            navigate('/signin')
        }
    }


    return (
        <main>
            <header>
                <a href='/' className='logo'>BlogPulse</a>
                <nav>
                    {userInfo && (
                        <>
                            <a className='login'>Create Blog</a>
                            <a href='/signin' onClick={handleLogout} className='register'>Logout</a>

                        </>
                    )}
                    {!userInfo && (
                        <>
                            <a href='/signin' className='login'>Login</a>
                            <a href='/signup' className='register'>Register</a>

                        </>
                    )}
                </nav>
            </header>
        </main>
    )
}

export default Navbar
