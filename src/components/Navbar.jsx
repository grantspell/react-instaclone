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
`
const LogoStyle = styled.div`
    display: flex;
    h3 {
    font-family: Oleo Script;
    font-size: 25px;
    margin: 0px auto;
  }
`
const SearchStyle = styled.div`
  background-color: #FAFAFA;
  border: 1px solid rgba(0,0,0,.0975);
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  color: #757575;
  margin: 0px auto;

  input {
    background-color: #FAFAFA;
    border: none;
    padding-left: 10px;
    color: #757575;
  }
`
const IconsStyle = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  width: 15vw;
`

class Navbar extends Component{

  render(){
    return (
      <NavWrapper>
        <LogoStyle>
        <h3><FaInstagram /> | Instaclone</h3>
        </LogoStyle>
        <SearchStyle>
          <FaSearch/><input type="text" value="Search"/>
        </SearchStyle>
        <IconsStyle>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </IconsStyle>
      </NavWrapper>
    );
  }
}

export default Navbar