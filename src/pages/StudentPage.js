import NavigationBar from "../components/NavigationBar";
import UserInfo from "../components/studentPage/UserInfo";
import React, { useState } from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import ArtechneVer1 from "../components/studentPage/artechne_ver1";
import ArtechneVer2 from "../components/studentPage/artechne_ver2";
import Reservation from "../components/reservation/Reservation";
const StyledBox = styled.div`
  text-align: center;
  background-color: white;
  padding: 20px;
  border: 5px solid;
  border-color: lightblue;
  border-radius: 12px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;
const StyleFont = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
`;
const BoxContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 auto; /* 수평 가운데 정렬 */
`;
const ButtonContainer = styled.div`
  width: 80%;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto; /* 수평 가운데 정렬 */
  margin-left: 5px; /* 왼쪽으로 10px 이동 */
  margin-bottom : 5px;
`;
const OptionContainer = styled.div`
  width: 80%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto; /* 수평 가운데 정렬 */
  margin-left: 5px; /* 왼쪽으로 10px 이동 */
  margin-bottom : 5px;
`;
const StyledHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 20px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const StyledUseBox = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border-width: 2px;
  border-color: #000000; /* 변경 */
`;
const StyledOpeningBox = styled.div`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: bold;
  width: 1rem;
  height: 1rem;
  background-color: #FFFFFF; /* 변경 */
  border-radius: 50%;
  border-width: 2px;
  border-color: #000000; /* 변경 */
`;
const StyledText = styled.div`
  font-size: 1.5rem;
  margin-left: 0.7rem; /* 원하는 간격 설정 */
`;
const StudentPage = () => {
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [isToggleOn, setToggleOn] = useState(false);
    const [selectedOption, setSelectedOption] = useState('2층');

    const [isReservationClick, setIsReservationClick] = useState(false);

    const handleClick = () => {
        setIsCheckedIn(!isCheckedIn);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    const handleToggle = () => {
        setToggleOn(!isToggleOn);
    };

    const onReservationBtnClick = () => {
        setIsReservationClick(!isReservationClick);
    }

    return (
        <>
            <NavigationBar />
            <BoxContainer>
                <StyledBox>
                    <StyleFont>
                        <UserInfo />
                    </StyleFont>
                </StyledBox>
            </BoxContainer>
            < br />
            <BoxContainer>
                <ButtonContainer>
                    {/* <div style={{ display: 'flex', alignItems: 'center' }}> */}
                    <StyledHeading>아르테크네 좌석 현황</StyledHeading>
                    <Button onClick={handleToggle} variant="light" className="border border-primary border-2 fw-bold">층 선택</Button>
                    {isToggleOn && (
                        <>
                            <p onClick={() => handleOptionClick('2층')} className={selectedOption === '2층' ? 'selected' : ''}>2층</p>
                            <p onClick={() => handleOptionClick('3층')} className={selectedOption === '3층' ? 'selected' : ''}>3층</p>
                            <p onClick={() => handleOptionClick('4층')} className={selectedOption === '4층' ? 'selected' : ''}>4층</p>
                            <p onClick={() => handleOptionClick('5층')} className={selectedOption === '5층' ? 'selected' : ''}>5층</p>
                            <p onClick={() => handleOptionClick('7층')} className={selectedOption === '7층' ? 'selected' : ''}>7층</p>
                        </>
                    )}
                    <Button variant="light" className="border border-primary border-2 fw-bold" onClick={handleClick}>
                        {isCheckedIn ? '체크아웃' : '체크인'}
                    </Button>
                    {/* </div> */}
                </ButtonContainer>
            </BoxContainer>
            <BoxContainer>
                <StyledBox>
                    {['2층', '3층'].includes(selectedOption) ? (
                        <ArtechneVer1 option={parseInt(selectedOption)} />
                    ) : (
                        <ArtechneVer2 option={parseInt(selectedOption)} />
                    )}
                </StyledBox>
            </BoxContainer>
            <BoxContainer>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Container>
                        <StyledUseBox />
                        <StyledText>이용불가</StyledText>
                        <StyledOpeningBox />
                        <StyledText>이용가능</StyledText>
                    </Container>
                </div>
            </BoxContainer>

            <br />
            <StyledHeading onClick={onReservationBtnClick}>
                메타버스 회의실 예약 {isReservationClick ? "▼" : "▲"}
            </StyledHeading>
            {isReservationClick && <Reservation />}

        </>
    )

}

export default StudentPage;