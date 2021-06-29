import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><i className="fas fa-utensils fa-3x icon"></i></Link>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/DinningDelight">Dinning Delightfull</Link></li>
                        <li><Link className="dropdown-item" to="/SweetSurprise">Sweet Surprise</Link></li>
                        <li><Link className="dropdown-item" to="/ThirstThrift">Thirst Thrift</Link></li>
                        <li><Link className="dropdown-item" to="/GoFoodie">Go Foodie</Link></li>
                        <li><Link className="dropdown-item" to="/GoldenGrills">Golden Grills</Link></li>
                        <li><Link className="dropdown-item" to="/SweetRepeat">Sweet Repeat</Link></li>
                    </ul>
                </li>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        <li className="nav-item">
                            <Link className="nav-link " to="/signup">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav >





    )
}