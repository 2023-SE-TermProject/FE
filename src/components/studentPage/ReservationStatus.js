import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const StyledHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

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
      {metaData[0] ? (
        <div>
          <StyledHeading>º 메타버스 회의실</StyledHeading>
          <p style ={{fontSize : "1.2rem"}}>- 날짜/시간: {metaData[0].startTime} ~ {metaData[0].endTime}</p>
          <p style ={{fontSize : "1.2rem"}}>º회의실: {metaData[0].roomNumber}</p>
        </div>
      ) : (
        <div>
        <StyledHeading>º 메타버스 회의실</StyledHeading>
        <div style ={{fontSize : "1.2rem"}}>예약 정보가 없습니다.</div>
      </div>
      )}
    </>
  );
};

export default ReservationStatus;