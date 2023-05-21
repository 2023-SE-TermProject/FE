import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SeatStatus = () => {
    const [artechnetData, setArtechnetData] = useState(null);
    const id = localStorage.getItem("id");

    useEffect(() => {
      // 백엔드 API 엔드포인트
      const artechnetUrl = `http://localhost:8080/members/${id}/seat`;
  
      // API 요청 보내기
      axios.get(artechnetUrl)
        .then(response => {
          // API 요청이 성공하면 받아온 데이터를 상태에 저장
          setArtechnetData(response.data);
          console.log(artechnetData);
        })
        .catch(error => {
          // API 요청이 실패하면 에러 처리
          console.error('Error fetching reservation data:', error);
        });
    }, [id]);       
  
    if (!artechnetData) {
      // 데이터가 아직 로딩 중인 경우 로딩 상태를 표시할 수 있습니다.
      return <div>Loading...</div>;
    }

  return (
    <>
      {artechnetData.id && (
        <div>
          <h3>아르테크네</h3>
          <p>사용중인 좌석: {artechnetData.seatNumber}</p>
          <p>위치: {artechnetData.floor}</p>
        </div>
      )}
    </>
  );
};

export default SeatStatus;