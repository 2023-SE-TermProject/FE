import axios from "../../hooks/axios";
import styled, { css } from "styled-components";
{/*
The user sends the selected reservation time and meeting room to the backend to check the success of the reservation,
and then displays the reservation status to the user.
*/}
const SubmitButton = ({roomId, start, end}) => {
    
    function onSubmitBtnClick() {
        
        console.log("Submit");
        console.log(localStorage.getItem("id"));
        console.log("RoomId : " + roomId);
        console.log("startTime : " + start);
        console.log("endTime : " + end);

        const submitUrl = `https://gcu-metaverse.shop/api/reservations`

        // Send the reservation information to the backend.
        axios.post(submitUrl, {
          memberIdx : localStorage.getItem("id"),
          meetingRoomIdx : roomId,
          start : start,
          end : end
        })
            .then(response => {
                // Upon a successful API request, store the retrieved data in the state.
                console.log(response.data);
                window.alert("예약 신청 성공!");
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            })
            .catch(error => {
                // If the API request fails, handle the error.
                console.error('Error fetching reservation data:', error);
                window.alert("예약 신청 실패!");
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            });

    }

    return(
        <>
        <Button onClick={() => onSubmitBtnClick()}>
            예약 신청
        </Button>
        </>
    )

}

const Button = styled.button`
    background: teal;
    color: white;
    border: none;
    border-radius: 5px;
    height: 3rem;
    width: 20rem;
`;

export default SubmitButton;