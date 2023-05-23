import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('/json');
        const ipAddress = response.data.IPv4;
        localStorage.setItem('ipAddress', ipAddress);
        console.log('IP 주소가 저장되었습니다:', ipAddress);
      } catch (error) {
        console.error('IP 주소를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchIpAddress();
  }, []);


  return (
    <Div margin-left="10px">
      <br></br>
      <LogoImage src="/gachon_logo.jpg" alt="Logo" />
      <LogoContainer>
        <Logo> AI공학관 좌석예약 서비스</Logo>
      </LogoContainer>
      <p></p>
      <Button onClick={() => window.location.href = "http://localhost:8080/oauth2/authorization/google"}>구글 로그인</Button>
    </Div>
  )
}

export default Login;
