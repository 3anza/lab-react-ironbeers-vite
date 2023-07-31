import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const AddBeerPage = () => {
  const [addBeer, setAddBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddBeer({ ...addBeer, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(addBeer),
      });

      if (!response.ok) {
        throw new Error(`Failed to add beerServer response status: ${response.status}`);
      }
      // reset the form after successful submission
      setAddBeer({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
      });

      alert('Beer added successfully!');
    } catch (error) {
      console.error('Error adding beer', error);
      alert('Failed to add beer. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Add a new beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" value={addBeer.name} onChange={handleChange} />
        </label>
        <label>
          Tagline:
          <input name="tagline" value={addBeer.tagline} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input name="description" value={addBeer.description} onChange={handleChange} />
        </label>
        <label>
          First Brewed:
          <input name="first_brewed" value={addBeer.first_brewed} onChange={handleChange} />
        </label>
        <label>
          Brewers Tips:
          <input name="brewers_tips" value={addBeer.brewers_tips} onChange={handleChange} />
        </label>
        <label>
          Attenuation Level:
          <input name="attenuation_level" value={addBeer.attenuation_level} onChange={handleChange} />
        </label>
        <label>
          Contributed By:
          <input name="contributed_by" value={addBeer.contributed_by} onChange={handleChange} />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};

export default AddBeerPage;
