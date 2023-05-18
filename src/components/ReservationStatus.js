import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ReservationStatus = () => {
    const [metaData, setMetaData] = useState(null);
    const [artechnetData, setArtechnetData] = useState(null);
    const location = useLocation();
    const id = location.state && location.state.id;

    useEffect(() => {
      // 백엔드 API 엔드포인트
      const artechnetUrl = `http://localhost:8080/reservations/${id}`;
      const metabusUrl = `http://localhost:8080/reservations/${id}`;
  
      // API 요청 보내기
      axios.get(artechnetUrl)
        .then(response => {
          // API 요청이 성공하면 받아온 데이터를 상태에 저장
          setArtechnetData(response.data);
        })
        .catch(error => {
          // API 요청이 실패하면 에러 처리
          console.error('Error fetching reservation data:', error);
        });
              // API 요청 보내기
      axios.get(metabusUrl)
      .then(response => {
        // API 요청이 성공하면 받아온 데이터를 상태에 저장
        setMetaData(response.data);
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
    if (!metaData) {
      // 데이터가 아직 로딩 중인 경우 로딩 상태를 표시할 수 있습니다.
      return <div>Loading...</div>;
    }
  return (
    <div>
      <h2>나의 예약 현황</h2>

      {artechnetData.artechnet && (
        <div>
          <h3>아르테크네</h3>
          <p>사용중인 좌석: {artechnetData.artechnet.seatNumber}</p>
          <p>위치: {artechnetData.artechnet.floor}</p>
        </div>
      )}

      {metaData.metaverse && (
        <div>
          <h3>메타버스 회의실</h3>
          <p>날짜/시간: {metaData.metaverse.startTime} ~ {metaData.metaverse.endTime}</p>
          <p>회의실: {metaData.metaverse.roomNumber}</p>
        </div>
      )}
    </div>
  );
};

export default ReservationStatus;