import ".//styles/seatStyle1.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArtechneVer1 = ({ option }) => {
  const [seatStatus, setSeatStatus] = useState([]);

  useEffect(() => {
    const fetchSeatStatus = async () => {
      try {
        const response = await axios.get(`/api/seat-status/${option}`);
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
          className={`itembox ${index}`}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: status === 'use' ? 'gray' : 'white',
            margin: '5px',
            border: '1px solid black',
          }}
        ></div>
      ))}
    </div>
  );
}  

export default ArtechneVer1;