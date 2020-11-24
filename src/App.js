import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Content';
import Footer from './components/Footer';
import logo from './icons/logo.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>

  );
}

export default App;
