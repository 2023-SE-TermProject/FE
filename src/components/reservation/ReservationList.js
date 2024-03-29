import React, { useEffect, useState } from "react";
import axios from "../../hooks/axios";
import TimeBlock from "./TimeBlock";
import styled, { css } from "styled-components";
import SubmitButton from "./SubmitButton";
{/*
When the user clicks on the desired meeting room number for reservation,
this code fetches the reservation status of that particular meeting room and informs the available time slots for reservation.
*/}
const ReservationList = ({ date, roomId }) => {

    const [reservationTimeList, setReservationTimeList] = useState(null);
    const [reservationTimeRangeList, setReservationTimeRangeList] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [activeTime, setActiveTime] = useState(null);
    const [activeTimeRange, setActiveTimeRange] = useState(null);


    useEffect(() => {
        setReservationTimeList(null);
        setReservationTimeRangeList(null);
        setStartTime(null);
        setEndTime(null);
        setActiveTime(null);
        setActiveTimeRange(null);

        const reservationTimeUrl = `https://gcu-metaverse.shop/api/reservations/${roomId}?year=${date.getFullYear()}&month=${(date.getMonth() + parseInt(1))}&date=${date.getDate()}`;

        // API 요청 보내기
        axios.get(reservationTimeUrl)
            .then(response => {
                console.log(response.data);
                setReservationTimeList(response.data);
                console.log("time list : ");
                console.log(reservationTimeList);
            })
            .catch(error => {
                console.error('Error fetching reservation data:', error);
            });
    }, [date, roomId]);



    function onTimeBtnClick(time) {
        setStartTime(time);
        setActiveTime(time);
        setActiveTimeRange(null);
        console.log("time change " + time);

        const timeRangeUrl = `https://gcu-metaverse.shop/api/reservations/${roomId}/valid-time?year=${date.getFullYear()}&month=${(date.getMonth() + parseInt(1))}&date=${date.getDate()}&start=${time}`
        axios.get(timeRangeUrl)
            .then(response => {
                // Upon successful API request, store the retrieved data in the state.
                console.log(response.data);
                setReservationTimeRangeList(response.data);
                console.log(reservationTimeRangeList);
            })
            .catch(error => {
                console.error('Error fetching reservation data:', error);
            });

    }
    // This code calculates the start time and end time based on the user's click.
    function onTimeRangeBtnClick(time) {
        setEndTime((parseInt(startTime) + parseInt(time)));
        setActiveTimeRange(time);
        console.log("예약 종료시간 계산 : " + (parseInt(startTime) + parseInt(time)));

    }

    // When the user selects the start time and end time and clicks the "Book Now" button, it is connected to the SubmitButton component.
    return (
        <>
            <b>예약 시작 가능 시간</b>            
            {reservationTimeList &&
                <TimeBlockContainer>
                    {reservationTimeList.map((reservationTime) => (
                        <TimeBlock
                            time={reservationTime[0]}
                            onClick={() => onTimeBtnClick(reservationTime[0])}
                            isActive={reservationTime[0] === activeTime}
                        />
                    ))}
                </TimeBlockContainer>}
            {reservationTimeList && !reservationTimeList.length && 
            <i>예약 가능 시간이 없습니다.</i> }

            <br/>
            <br/>
            <b>예약 시간</b>
            {reservationTimeRangeList &&
                <TimeBlockContainer>
                    {reservationTimeRangeList.map((reservationTimeRange) => (
                        <TimeBlock
                            time={reservationTimeRange[0]}
                            onClick={() => onTimeRangeBtnClick(reservationTimeRange[0])}
                            isActive={reservationTimeRange[0] === activeTimeRange}
                        />
                    ))}
                </TimeBlockContainer>
            }
            <br />
            {startTime && endTime &&
                <SubmitButtonContainer>
                    <SubmitButton
                        roomId={roomId}
                        start={new Date(date.getFullYear(), date.getMonth(), date.getDate(), startTime, 0, 0)}
                        end={new Date(date.getFullYear(), date.getMonth(), date.getDate(), endTime, 0, 0)}
                    />
                </SubmitButtonContainer>
            }
        </>
    );

}

const TimeBlockContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

const SubmitButtonContainer = styled.div`
  text-align: center;
  display: flex;
  width: 100%;

  @media (min-width: 768px) {
    width: 100vw;
  }
`;

export default ReservationList;