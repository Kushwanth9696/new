import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#000' }}>
          <div className="container">
            <Link className="navbar-brand font-weight-bold" to="/" style={{ color: '#fff' }}>CHATMENTER</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <NavItem to="/" text="Home" />
                <NavItem to="/about" text="About" />
                <NavItem to="/contact" text="Contact" />
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

const NavItem = ({ to, text }) => (
  <li className="nav-item">
    <Link className="nav-link" to={to} style={{ color: '#fff' }}>{text}</Link>
  </li>
);

export default App;
