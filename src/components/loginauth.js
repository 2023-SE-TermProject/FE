import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function LoginAuth (){
    const baseUrl = "http://localhost:8080";
    const [searchParams, setSearchParams]= useSearchParams();
    const role = searchParams.get('role');
    const token = searchParams.get('token');
    const id = searchParams.get('id');
    const navigate = useNavigate();
    useEffect(() => {
        storeToken(token);
    
        if (role === 'admin'){
            UserInfo();
            navigate("/adminpage");
        }
        else if (role === "user"){
            UserInfo();
            navigate("/studentpage", { state: { id: id } });
        }
        else if (role === "guest"){
            const unregisteredStudentID = window.prompt("최초 로그인 입니다. 학번을 입력하세요.");
            if (unregisteredStudentID) {
                studentId = unregisteredStudentID.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                insertUser(studentId);
              }
        }
    }, [role, token,, id]);
    
    async function UserInfo(){
        try {
            const response = await axios.get(baseUrl + "/member");
            const { name, studentId} = response.data;

            console.log("이름:", name);
            console.log("학생 ID:", studentId);
            
          } catch (error) {
            console.error("서버로부터 데이터를 가져오는 데 실패했습니다:", error);
          }
    }

    async function insertUser(studentId){
        await axios
            .post(baseUrl + "/api/member",{
              studentId : studentId,
            })
            .then((response) => {
              if (response.data === "True"){
                UserInfo();
                navigate("/studentpage")
              }
            })   
            .catch((error)=>{
                console.log(error);
            })
      }

    const storeToken = (token) => {
        // 토큰 값을 로컬 스토리지에 저장
        localStorage.setItem('token', token);
    };

}
export default LoginAuth;