import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return(
        <div className="nav">
            <div className="nav-item"><span className="nav-logo">National Parks</span></div>
            <div className="nav-item"><Link to="/">Home</Link></div>
            <div className="nav-item"><Link to="/search">Search</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
        </div>
    )

}
