import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './icons/logo.svg';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>

  );
}

export default App;
