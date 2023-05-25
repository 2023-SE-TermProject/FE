import ".//styles/seatStyle2.css"
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from 'axios';

const ArtechneVer2 = ({ option }) => {
  const [seatStatus, setSeatStatus] = useState([]);

  useEffect(() => {
    const fetchSeatStatus = async () => {
      try {
        const response = await axios.get(`https://gcu-metaverse.shop/api/seats/${option}`);
        setSeatStatus(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeatStatus();
  }, []);

  return (
    <div>
      {/* 바로 아래 코드는 임시로 넣어놨습니다. */}
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
                fontSize: '1vw',
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
export default ArtechneVer2;