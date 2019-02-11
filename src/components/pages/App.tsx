import React, { Component } from 'react';
// import styled from 'styled-components';

import About from '../organisms/About';
import Banner from '../organisms/Banner';
import Contact from '../organisms/Contact';
import Navbar from '../organisms/Navbar';
import Portfolio from '../organisms/Portfolio';

class App extends Component {
  public render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
