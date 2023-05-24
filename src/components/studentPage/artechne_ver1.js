import ".//styles/seatStyle1.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArtechneVer1 = ({ option }) => {
  const [seatStatus, setSeatStatus] = useState([]);

  useEffect(() => {
    const fetchSeatStatus = async () => {
      try {
        const response = await axios.get(`http://gcu-metaverse.shop:8080/seats/${option}`);
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
      <div>{option}</div>
      {seatStatus.map((status, index) => (
        <div
          key={index}
          className={`itembox ${status.seatNumber}`}
          style={{
            width: '10vw',
            height: '10vw',
            backgroundColor: status.isUsed ? 'gray' : 'white',
            margin: '1vw',
            border: '1px solid black',
          }}
        ></div>
      ))}
    </div>
  );
}  

export default ArtechneVer1;