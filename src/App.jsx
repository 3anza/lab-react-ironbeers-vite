import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import AllBeersPage from './pages/AllBeersPage'
import RandomBeerPage from './pages/RandomBeerPage'
import AddBeerPage from './pages/AddBeerPage'
import BeerDetailsPage from './pages/BeerDetailsPage'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<HomePage/>} />
          <Route  path="/beers" element={<AllBeersPage/>} />
          <Route  path="/random-beer" element={<RandomBeerPage/>} />
          <Route  path="/new-beer" element={<AddBeerPage/>} />
          <Route  path="/beers/:beerId" element={<BeerDetailsPage/>} />
          
          <Route path="*" element={<h2>404 Page</h2>} />
        </Routes>
          
      </Router>
    </div>
  );
}

export default App;