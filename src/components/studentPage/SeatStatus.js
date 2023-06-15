import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
{/*
This code displays the reservation status for the user.
It allows users to view the reservation status for Artecnne. 
*/}

const StyledHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

const SeatStatus = () => {
    const [artechnetData, setArtechnetData] = useState(null);
    const id = localStorage.getItem("id");

    useEffect(() => {
      // This code sends the user ID to the backend server to retrieve the user's checkIn history.
      const artechnetUrl = `https://gcu-metaverse.shop/api/members/${id}/seat`;
      axios.get(artechnetUrl)
        .then(response => {
          // Upon successful API request, this code stores the received data in the state.
          setArtechnetData(response.data);
          console.log(artechnetData);
        })
        .catch(error => {
          console.error('Error fetching reservation data:', error);
        });
    }, [id]);       
  
    if (!artechnetData) {
      // If the data is still being loaded, the loading state is displayed.
      return <div>Loading...</div>;
    }
    if (artechnetData.seatNumber === null){
      return(
        <div>
                <StyledHeading>º 아르테크네</StyledHeading>
              <div style ={{fontSize : "1.2rem"}}>체크인한 좌석이 없습니다.</div>
              <br />
        </div>);
    }

  return (
    <>
      {artechnetData.id ? (
        <div style={{ textAlign: 'center' }}>
          <StyledHeading>º 아르테크네</StyledHeading>
          <p style ={{fontSize : "1.2rem"}}>사용중인 좌석: {artechnetData.seatNumber}</p>
          <p style ={{fontSize : "1.2rem"}}>위치: {artechnetData.floor}</p>
        </div>
      ) : (
        <div>
        <StyledHeading>º 아르테크네</StyledHeading>
        <div style={{ fontSize: '1.2rem' }}>체크인한 좌석이 없습니다.</div>
        <br />
        </div>
      )}
    </>
  );
};

export default SeatStatus;