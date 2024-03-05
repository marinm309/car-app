import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import CarReview from './CarReview';
import Header from './Header';
import Footer from './Footer'
import SingleCategory from './SingleCategory';
import Home2 from './assets/Home2';

function App() {
  return (
    <Router>
      <div>
        
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:carId" element={<CarReview />} />
          <Route path="/category/:carCategory" element={<SingleCategory />}></Route>
          <Route path="/home2" element={<Home2 />}></Route>
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
