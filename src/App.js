import React, { Component } from 'react';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import styled from 'styled-components';

// STYLES
const BodyStyles = styled.div`
  background-color: #F9F9F9;
  font-family: "Open Sans";
`

class App extends Component {
  render() {
    return (
      <BodyStyles>
        <Navbar />
        <Posts />
      </BodyStyles>
    );
  }
}

export default App;
