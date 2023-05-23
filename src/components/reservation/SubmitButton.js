import axios from "../../hooks/axios";
import styled, { css } from "styled-components";

const SubmitButton = ({roomId, start, end}) => {
    
    function onSubmitBtnClick() {
        
        console.log("Submit");
        console.log(localStorage.getItem("id"));
        console.log("RoomId : " + roomId);
        console.log("startTime : " + start);
        console.log("endTime : " + end);

        const submitUrl = `/reservations`

        // API 요청 보내기
        axios.post(submitUrl, {
          memberIdx : localStorage.getItem("id"),
          meetingRoomIdx : roomId,
          start : start,
          end : end
        })
            .then(response => {
                // API 요청이 성공하면 받아온 데이터를 상태에 저장
                console.log(response.data);
                window.alert("예약 신청 성공!");
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            })
            .catch(error => {
                // API 요청이 실패하면 에러 처리
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