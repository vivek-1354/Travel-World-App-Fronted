import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <header className="heading d-flex grow-shrink-basis align-center">
            <h1 className="heading-title">
                <a className="link" href="/">TravelWorld</a>
            </h1>
            <div className="form-container d-flex align-center cursor-pointer">
                <span className='form-option'>Any Where</span>
                <span className='border-right-1px'></span>
                <span className='form-option'>Any Week</span>
                <span className='border-right-1px'></span>
                <span className='form-option'>Any Guests</span>
                <span class="search material-symbols-outlined">search</span>
            </div>
            <nav className="d-flex align-center gap-large">
                <div className="nav d-flex align-center cursor-pointer">
                    <span className="material-symbols-outlined profile-option menu">menu</span>
                    <span className="material-symbols-outlined profile-option person">person</span>
                </div>
            </nav>
        </header>
    )
}

