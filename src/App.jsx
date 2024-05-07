import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orientation from 'react-native-orientation-locker';

import Home from './Home';
import CarReview from './CarReview';
import Header from './Header';
import Footer from './Footer'
import SingleCategory from './SingleCategory';
import ContactForm from './ContactForm';

function App() {

  useEffect(() => {
    // Lock the screen orientation to portrait
    Orientation.lockToPortrait();

    // Optionally, you can unlock the orientation later if needed
    // Orientation.unlockAllOrientations();

    return () => {
      // Remember to unlock the orientation when the component unmounts
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <Router>
      <div>
        
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:carId" element={<CarReview />} />
          <Route path="/category/:carCategory" element={<SingleCategory />}></Route>
          <Route path="/contact" element={<ContactForm />}></Route>
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
