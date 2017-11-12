import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

// STYLES
const NavWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 25px;
  padding: 26px 5vw;
  border-bottom: 1px solid rgba(0,0,0,.0975);

  h3 {
    font-family: Oleo Script;
  }
`

class Navbar extends Component{

  render(){
    return (
      <NavWrapper>
        <h3><FaInstagram /> | Instaclone</h3>
        <div>
          <FaSearch/><input type="text"/>
        </div>
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </NavWrapper>
    );
  }
}

export default Navbar