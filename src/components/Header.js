import React from 'react';
import styled from 'styled-components';

// Styled header container
const HeaderContainer = styled.header`
  background-color: #34495e; /* Deep blue-grey */
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 2.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

// Navigation bar styling
const Nav = styled.nav`
  margin-top: 20px;
  ul {
    display: flex;
    justify-content: center;
    gap: 40px;
    list-style-type: none;
  }
  li {
    display: inline;
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      padding: 8px 20px;
      border-radius: 5px;
      transition: background 0.3s;
    }
    a:hover {
      background-color: #e74c3c; /* Highlight color */
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>CardioPredict</h1>
      <Nav>
        <ul>
          <li><a href="#form">Predict Risk</a></li>
          <li><a href="#map">Find Hospitals</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
