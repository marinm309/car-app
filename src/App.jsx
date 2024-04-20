import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import CarReview from './CarReview';
import Header from './Header';
import Footer from './Footer'
import SingleCategory from './SingleCategory';
import ContactForm from './ContactForm';

function App() {

// Check if the user agent indicates an iPhone
var isiPhone = /iPhone/i.test(navigator.userAgent);

// If the user is on an iPhone, prevent overscrolling
if (isiPhone) {
  var lastScrollTop = 0;

  document.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;

    // If scrolling down and at the bottom, prevent default
    if (scrollTop > lastScrollTop && scrollTop + clientHeight >= scrollHeight) {
      window.scrollTo(0, scrollHeight - clientHeight);
    }
    // If scrolling up and at the top, prevent default
    else if (scrollTop < lastScrollTop && scrollTop <= 0) {
      window.scrollTo(0, 0);
    }

    lastScrollTop = scrollTop;
  }, { passive: false });
}



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
