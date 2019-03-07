import 'aos/dist/aos.css';
import axios from 'axios';
import React, { Component } from 'react';
import styled from 'styled-components';

import About from '../organisms/About';
import Banner from '../organisms/Banner';
import Contact from '../organisms/Contact';
import Navbar from '../organisms/Navbar';
import Portfolio from '../organisms/Portfolio';

const HACK_OR_SNOOZE_API = 'https://hack-or-snooze-api.herokuapp.com/';
const JOBLY_FRONTEND = 'https://jobly-wongco.herokuapp.com/';
const JOBLY_BACKEND_API = 'https://jobly-api-wongco.herokuapp.com/';

const StyledApp = styled.div`
  background: linear-gradient(to bottom, white, #ffb900);
`;
class App extends Component {
  public async componentDidMount() {
    axios.get(HACK_OR_SNOOZE_API);
    axios.get(JOBLY_FRONTEND);
    axios.get(JOBLY_BACKEND_API);
  }
  public render() {
    return (
      <StyledApp id="top">
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
