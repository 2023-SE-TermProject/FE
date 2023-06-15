import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
{/*
This code constructs the UI for the login page and provides a button for Google login.
 The login is only possible with a Gachon University Google account.
 If you are not affiliated with Gachon University, login is restricted.
*/}
 
// This code defines a styled component called "StyledBox" that represents a styled <div> element.
const Div = styled.div`

margin: 1em;
padding: 0.23em 13m;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;
const Logo = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const LogoContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f8f9fa;
`;

const LogoImage = styled.img`
  width: 200px;
  height: 80px;
  margin-bottom: 0.5rem;
`;

function Login() {

  return (
    <Div margin-left="10px">
      <br></br>
      <LogoImage src="/gachon_logo.jpg" alt="Logo" />
      <LogoContainer>
        <Logo> AI공학관 좌석예약 서비스</Logo>
      </LogoContainer>
      <p></p>
      <Button onClick={() => 
        window.location.href = "https://gcu-metaverse.shop/api/oauth2/authorization/google" // 배포 환경
        // window.location.href = "http://localhost:8080/oauth2/authorization/google" // 로컬 환경
        }>구글 로그인</Button>
    </Div>
  )
}

export default Login;
