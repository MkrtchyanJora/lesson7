import React from "react";
import './Header.css'

class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <header className="header">
                    <div className="block1"></div>
                    <div className="block2">
                        <nav>
                            <ul>
                                <li>
                                    <a className="nav-href" href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="block3">
                        <button className="btn1">Login</button>
                        <button className="btn2">Register</button>
                    </div>
                </header>
            </>
        )
    }
}

export default Header