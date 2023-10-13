import React, { useContext, useEffect, useState } from 'react';
// import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';



const Navbar = () => {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/profile", {
            method: 'GET',
            credentials: 'include',

        }).then((response) => {
            response.json().then((user) => {
                setUserInfo(user)

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
        <nav className='w-full flex items-center py-5 top-0 z-20
        backdrop-filter backdrop-blur-lg bg-opacity-70 bg-primary sm:px-16 px-6'>
            <div className='flex w-full justify-between  items-center max-w-7xl mx-auto'>
                <Link to='/' className='flex items-center gap-2'>
                    <p className='text-gray-800 text-[28px] font-bold cursor-pointer'>BlogPulse</p>
                </Link>
                <div className='sm:flex flex-row gap-10'>
                    <Link to='/createblog'>
                        <p>CreteBlog</p>
                    </Link>
                    <Link to='/logout'>
                        <p>Logout</p>
                    </Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
