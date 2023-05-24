import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import axios from "../hooks/axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

function LoginAuth (){
    const [searchParams, setSearchParams]= useSearchParams();
    const role = searchParams.get('role');
    const token = searchParams.get('token');
    const id = searchParams.get('id');
    const navigate = useNavigate();

    useEffect(() => {
        storeUserInfo(token, id);
        console.log(role);

        const redirect = () => {
        if (role === 'admin'){
            navigate("/adminpage");
        }
        else if (role === "user"){
            navigate("/studentpage");
        }
        else if (role === "guest"){
            const unregisteredStudentID = window.prompt("최초 로그인 입니다. 학번을 입력하세요.");
            if (unregisteredStudentID) {
                const studentId = unregisteredStudentID.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
                console.log("입력받은 학번 : " + studentId);
                insertUser(studentId);
              }
        }
      }
      redirect();
    }, []);

    async function insertUser(studentId){
        await axios
            .patch("/members/"+id+"/sign-up",{
              studentId : studentId,
            })
            .then((response) => {
              if (response.data === true){
                navigate("/studentpage")
              }
            })   
            .catch((error)=>{
                console.log(error);
                navigate("/login")
            })
      }

    const storeUserInfo = (token, id) => {
        // 토큰 값과 id 로컬 스토리지에 저장
        localStorage.setItem('token', token);
        localStorage.setItem("id", id);
        console.log(id);
        console.log(token);
    };

}
export default LoginAuth;