import React, { Component } from 'react';
import Footer from './main/javascript/components/Footer/footer';
import Header from './main/javascript/components/Header/header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>Main Content</div>
        <Footer />
      </div>
    );
  }
}

export default App;
