import React from 'react';
// import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f9fa;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const NavigationBar = () => {
  // const history = useHistory();
    const handleLogout = () => {
      // history.push('/login');
    };
  
    return (
      <NavbarContainer>
        <Logo>가천대학교</Logo>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </NavbarContainer>
    );
  };
export default NavigationBar;
