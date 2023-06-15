import ".//styles/seatStyle1.css"
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
{/*
ArtechneVer1.js is the code that represents the seat status in Artecnne on floors 3, 4, 5, and 7.
If a seat is available, it is represented by a white-colored square, and if it is unavailable, it is represented by a gray-colored square. 
*/}
const ArtechneVer1 = ({ option }) => {
  const [seatStatus, setSeatStatus] = useState(null);
  // The backend retrieves the seat status information.
  useEffect(() => {
    const fetchSeatStatus = async () => {
      try {
        const response = await axios.get(`https://gcu-metaverse.shop/api/seats/${option}`);
        setSeatStatus(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeatStatus();
  }, [option]);

  return (
    <div>
      <div>
        <b>{option}층</b>
      </div>
      <SeatStatusContainer>
        {seatStatus &&
          seatStatus.map((status, index) => (
            <div
              key={index}
              className={`itembox ${status.seatNumber}`}
              style={{
                width: '10vw',
                height: '10vw',
                backgroundColor: status.isUsed ? 'gray' : 'white',
                margin: '1vw',
                border: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2.5vw',
                gridColumn: `span 1`,
                color: 'black',
              }}
            >
              {index + 1}
            </div>
          ))}
      </SeatStatusContainer>
    </div>
  );
            }
  const SeatStatusContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10vw, 1fr));
    gap: 1vw;
  `;
export default ArtechneVer1;