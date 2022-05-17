import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Classes from './components/Classes';
import ContactMe from './components/ContactMe';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/classes" element={<Classes/>}></Route>
          <Route path="/contact" element={<ContactMe/>}></Route>
        </Routes>
        <Footer/>
      </div>
    )
  }
}
