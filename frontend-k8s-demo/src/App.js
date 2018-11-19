import React, { Component } from 'react';
import Java from './components/Java';
import Golang from './components/GoLang';
import NodeJS from './components/NodeJS';
import Charp from './components/Cshap';
import Frontend from './components/Frontend';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
       
          <div className="flex-container">
              <div className="flex-center">
                <Frontend />
              </div>
          </div>
          <div className="flex-container">
              <div className="flex-stretch">
                <Java />
                <Charp />
                <Golang />
                <NodeJS />
              </div>
          </div>        
        <Footer />
      </div>
    );
  }
}

export default App;
