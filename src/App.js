import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/layout/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
