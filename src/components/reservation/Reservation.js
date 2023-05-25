import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from "moment/moment";
import axios from "../../hooks/axios";
import Select from "react-select";
import ReservationList from "./ReservationList";

const Reservation = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const [roomList, setRoomList] = useState(null);
  const [selectRoom, setSelectRoom] = useState(null);

  useEffect(() => {
    const requestUrl = `https://gcu-metaverse.shop:8080/reservations/room-list`;

    // API 요청 보내기
    axios.get(requestUrl)
      .then(response => {
        // API 요청이 성공하면 받아온 데이터를 상태에 저장
        const rooms = response.data.map((room) => ({
          value: room.id,
          label: room.roomNumber.toString()
        })
        );
        setRoomList(rooms);
        setSelectRoom(roomList[0]);
        console.log(roomList);
      })
      .catch(error => {
        // API 요청이 실패하면 에러 처리
        console.error('Error fetching reservation data:', error);
      });
  }, [])

  return (
    <div>
      <Calendar onChange={setSelectDate} // useState로 포커스 변경 시 현재 날짜 받아오기
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        value={selectDate}
        navigationLabel={null}
        minDate={new Date()} // 오늘 이후로만 선택 가능
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        className="mx-auto w-full text-sm border-b"
      />
      <br />
      {roomList && (<Select
        options={roomList}
        onChange={setSelectRoom}
        defaultValue={roomList[0]}
      />)}
      <br />
      {selectRoom &&
        (<ReservationList
          date={selectDate}
          roomId={selectRoom.value}
        />)}
    </div>
  );
}

export default Reservation;