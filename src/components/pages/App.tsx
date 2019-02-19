import React, { Component } from 'react';
import styled from 'styled-components';

import About from '../organisms/About';
import Banner from '../organisms/Banner';
import Contact from '../organisms/Contact';
import Navbar from '../organisms/Navbar';
import Portfolio from '../organisms/Portfolio';

const StyledApp = styled.div`
  background: linear-gradient(to bottom, white, #ffb900);
`;
class App extends Component {
  public render() {
    return (
      <StyledApp>
        <Navbar />
        <Banner />
        <Portfolio />
        <About />
        <Contact />
      </StyledApp>
    );
  }
}

export default App;
