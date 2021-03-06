import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import Menu from './Menu';
import HeaderBlock from './HeaderBlock';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
    <div className="app">
      <Routes>
        <Route path='/' element = {<>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
           {isMenuOpen && <Menu />}
          <HeaderBlock /> </>}          
        />
      </Routes> 
    </div>
    </Router>
  );
}

export default App;
