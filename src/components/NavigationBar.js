import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f8f9fa;
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const LogoButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
`;
const NavigationBar = () => {
  const navigate = useNavigate();
    const handleLogout = () => {
      navigate('/login');
    };
    const handleLogoClick =()=>{
      navigate("/studentpage");
    }
    return (
      <NavbarContainer>
        <LogoButton onClick={handleLogoClick}>가천대학교</LogoButton>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </NavbarContainer>
    );
  };
export default NavigationBar;
