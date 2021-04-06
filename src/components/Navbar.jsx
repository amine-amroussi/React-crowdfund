import React from 'react'
import Logo from "../assets/logo.svg"

export const Navbar = () => {
    return (
        <header className="header" >
            <nav className="navbar" >
                <div className="logo" >
                    <img src={Logo} alt="logo" />
                </div>
                <ul className="links" >
                    <li className="link" >
                        <a href="/about" > about </a>
                    </li>
                    <li className="link" >
                        <a href="/discover" > discover </a>
                    </li>
                    <li className="link" >
                        <a href="getstarted" > get started </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar