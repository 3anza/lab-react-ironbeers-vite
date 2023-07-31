import React from 'react';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

const RandomBeerPage = () => {
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
        fetchRandomBeer()
    }, [])

    const fetchRandomBeer = async () => {
        try {
            const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            if(!response.ok) {
                throw new Error('failes to fetch random beer')
            }
            const randomBeer = await response.json()
            setRandomBeer(randomBeer)
        }   catch (error) {
            console.error('Error fetching random beer', error)
        }
    }

    return (
        <div>
            <Navbar/>
            <div>
                {randomBeer && (
                    <div>
                        <img src={randomBeer.image_url} alt={randomBeer.name} width={150} />
                        <h2>{randomBeer.name}</h2>
                        <p>{randomBeer.tagline}</p>
                        <p>{`First Brewed: ${randomBeer.first_brewed}`}</p>
                        <p>{`Attenuation Level: ${randomBeer.attenuation_level}`}</p>
                        <p>{randomBeer.description}</p>
                        <p>{`Contributed by: ${randomBeer.contributed_by}`}</p>

                    </div>   
                )}
            </div>
        </div>
    )
}

export default RandomBeerPage;