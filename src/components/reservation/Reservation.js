import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from "moment/moment";
import axios from "../../hooks/axios";
import Select from "react-select";
import ReservationList from "./ReservationList";
{/*
This code displays a calendar for Metaverse meeting room reservations. 
When a date is clicked, it shows the available meeting rooms for that day.
*/}

const Reservation = () => {
  const [selectDate, setSelectDate] = useState(new Date());
  const [roomList, setRoomList] = useState(null);
  const [selectRoom, setSelectRoom] = useState(null);

  useEffect(() => {
    const requestUrl = `https://gcu-metaverse.shop/api/reservations/room-list`;

    axios.get(requestUrl)
      .then(response => {
        // Upon successful API request, store the received data in the state.
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
        console.error('Error fetching reservation data:', error);
      });
  }, [])

  return (
    <div>
      <Calendar onChange={setSelectDate} // Using useState, receive the current date when the focus changes.
        formatDay={(locale, date) => moment(date).format("DD")} // Configure to display only the numbers, excluding the day part.
        value={selectDate}
        navigationLabel={null}
        minDate={new Date()} // Selectable only for dates after today.
        showNeighboringMonth={false} // Configure to hide the dates of previous and future months.
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