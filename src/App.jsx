import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import CarReview from './CarReview';
import Header from './Header';
import Footer from './Footer'

function App() {
  return (
    <Router>
      <div>
        
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:carId" element={<CarReview />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
