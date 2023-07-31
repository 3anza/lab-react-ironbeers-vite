import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";

const AllBeersPage = () => {
    /*to store data */
    const [beers, setBeers] = useState ([])
    
    const fetchBeers = async () => {
        try {
            const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
            if (!response.ok) {
                throw new Error('Failed to fetch beers')
            }
            const beerData = await response.json()
            setBeers(beerData)
        } catch (error) {
            console.error('Error fetching beers:', error.message)
        }
    }
    /* to fetch data */
    useEffect(() => {
        fetchBeers()
    }, [])

    return (
        <div>
            <Navbar/>
            <h1>The collection</h1>
            {/* to display the data */}
            <ul> 
                {beers.map((oneBeer) => (
                    <div key={oneBeer.id}>
                        <img src={oneBeer.image_url} alt={oneBeer.name} width={150} />
                        <h2>{oneBeer.name}</h2>
                        <p>{oneBeer.tagline}</p>
                        <p>{`Contributed by: ${oneBeer.contributed_by}`}</p>
                        <Link to={`/beers/${oneBeer.id}`}>Beer Details</Link>
 
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default AllBeersPage;