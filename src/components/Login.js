import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import axios from "axios";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";

const Div = styled.div`
margin: 1em;
padding: 0.23em 13m;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`;
function Login() {
  const baseUrl = "http://localhost:8081";

  const [name, setName] = useState();
  const [studentId, setStudentId] = useState();

  async function insertUser(accessToken, studentId){
    await axios
        .post(baseUrl + "/api/member",{
          accessToken : accessToken,
          studentId : studentId,
        })
        .then((response) => {
          if (response.data === "success"){
            console.log(response.data);
            setName(response.data.name);
            setStudentId(response.data.studentId);
          }
        })   
		.catch((error)=>{
            console.log(error);
        })
		  
		  
  }

  const handleSubmit = async (accessToken) => {
      // e.preventDefault();

      await axios
          .post(baseUrl + "/api/member",{
            accessToken : accessToken,
          })
          .then((response) => {
            if (response.data === "최초 로그인입니다."){
              console.log(response.data)
              const unregisteredStudentID = window.prompt("최초 로그인 입니다. 학번을 입력하세요.");
              if (unregisteredStudentID) {
                studentId = unregisteredStudentID.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                insertUser(accessToken, studentId)
              }
            }
            else if(response.data === "success"){

            }
          })
          .catch((error) => {
            console.log(error)
          })
  }

  function handleGoogleLogin(response) {
    const accessToken = response.accessToken;
    const idToken = response.tokenId;
  
    // 액세스 토큰과 ID 토큰 활용
    console.log('액세스 토큰:', accessToken);
    console.log('ID 토큰:', idToken);
    // handleSubmit(accessToken);
  }
  function FailureLogin(response){
    console.log('fail');
  }

  return (
      <Div margin-left="10px">
        <br></br>
        <h1> 가천대학교 AI공학관 좌석예약 서비스</h1>
        <p></p>
        <GoogleLogin
          clientId="1099289903968-fgrq73iabmp5ssgaelttcknhcs733f25.apps.googleusercontent.com"
          buttonText="구글 로그인"
          onSuccess={handleGoogleLogin}
          onFailure={FailureLogin}
          cookiePolicy={'single_host_origin'}
          className="bg-red-600 text-black font-medium px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        />
      </Div>
  )
}

export default Login;
