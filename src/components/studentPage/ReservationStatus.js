import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import moment from 'moment/moment';
{/*
This code displays the reservation status for the user.
It allows users to view the reservation status for Metaverse meeting rooms. 
*/}
const StyledHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ReservationStatus = () => {
    const [metaData, setMetaData] = useState(null);
    const id = localStorage.getItem("id");
    // This code sends the user ID to the backend server to retrieve the user's reservation history.
    useEffect(() => {
      const metabusUrl = `https://gcu-metaverse.shop/api/members/${id}/reservation`;

      axios.get(metabusUrl)
      .then(response => {
        // Upon successful API request, this code stores the received data in the state.
        setMetaData(response.data);
        console.log(metaData);
      })
      .catch(error => {
        console.error('Error fetching reservation data:', error);
      });
    }, [id]);
  
    if (!metaData) {
      // If the data is still being loaded, the loading state is displayed.
      return <div>Loading...</div>;
    }
  return (
    <>
      {metaData[0] ? (
        <div>
          <StyledHeading>º 메타버스 회의실</StyledHeading>
          <p style ={{fontSize : "1.2rem"}}>- 날짜/시간: {moment(metaData[0].startTime).subtract(1, "months").format('YYYY-MM-DD/HH:mm')} ~ {moment(metaData[0].endTime).subtract(1, "months").format('YYYY-MM-DD/HH:mm')}</p>
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