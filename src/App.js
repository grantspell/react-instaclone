import React, { Component } from 'react';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const Body =
  styled.div`
    background: rgb(249, 249, 249);
    font-family: "Open Sans";
  `;

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Posts />
      </div>
    );
  }
}

export default App;
