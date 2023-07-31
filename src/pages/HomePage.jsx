import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';




function HomePage() {
    return (
        <div>
            <Navbar/>
            <h1>LAB | React IronBeers</h1>
            <ul>
                <li>
                <Link to="/beers">All Beers</Link>
                </li>
                <li>
                <Link to="/random-beer">Random Beer</Link>
                </li>
                <li>
                <Link to="/new-beer">New Beer</Link>
                </li>
            </ul>
        
        </div>
    )
}

export default HomePage;