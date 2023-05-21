import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReservationStatus = () => {
    const [metaData, setMetaData] = useState(null);
    const id = localStorage.getItem("id");

    useEffect(() => {
      // 백엔드 API 엔드포인트
      const metabusUrl = `http://localhost:8080/members/${id}/reservation`;

      // API 요청 보내기
      axios.get(metabusUrl)
      .then(response => {
        // API 요청이 성공하면 받아온 데이터를 상태에 저장
        setMetaData(response.data);
        console.log(metaData);
      })
      .catch(error => {
        // API 요청이 실패하면 에러 처리
        console.error('Error fetching reservation data:', error);
      });
    }, [id]);
  
    if (!metaData) {
      // 데이터가 아직 로딩 중인 경우 로딩 상태를 표시할 수 있습니다.
      return <div>Loading...</div>;
    }
  return (
    <>
      {metaData[0] && (
        <div>
          <h3>메타버스 회의실</h3>
          <p>날짜/시간: {metaData[0].startTime} ~ {metaData[0].endTime}</p>
          <p>회의실: {metaData[0].roomNumber}</p>
        </div>
      )}
    </>
  );
};

export default ReservationStatus;