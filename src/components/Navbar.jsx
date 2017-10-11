import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';


const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavbarWrapper = FlexRow.div`

`;

/* const Wrapper = ({ className, children }) => (
  <div className={className}>{children}</div>
)

const StyledWrapper = styled(Wrapper)`
  background-color: white;
  display: flex;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 26px 5vw;
  width: 90vw;
  height: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, .0975);
`; */

class Navbar extends Component{

  render(){
    return (
      <div>
      <StyledWrapper>
        <h3><FaInstagram /> | Instaclone</h3>
        <FaSearch/><input type="text"/>
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </StyledWrapper>
      </div>
    );
  }
}

export default Navbar