import NavigationBar from "../components/NavigationBar";
import UserInfo from "../components/studentPage/UserInfo";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import ArtechneVer1 from "../components/studentPage/artechne_ver1";
import ArtechneVer2 from "../components/studentPage/artechne_ver2";
import Reservation from "../components/reservation/Reservation";
import { Html5QrcodeScanner } from "html5-qrcode";
{/*
StudentPage.js is the code that defines and composes the components necessary for the student page.
It includes the required styled component and utilizes various components to construct the page.
*/}

// This code defines a styled component called "StyledBox" that represents a styled <div> element.
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
const StyledHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 20px;
`;
const StyledNotice = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 20px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  }
`;

const StyledUseBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
  border: 0.5px solid black;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    border-width: 1px;
  }
`;

const StyledOpeningBox = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  border: 0.5px solid black;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    border-width: 1px;
  }
`;

const StyledText = styled.div`
  font-size: 1rem;
  margin-left: 0.35rem;
  margin-right: 0.45rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-left: 0.7rem;
    margin-right: 0.9rem;
  }
`;


const MobileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileStyledBox = styled(StyledBox)`
  width: 90%;
`;

const MobileStyledHeading = styled(StyledHeading)`
  font-size: 1.2rem;
`;

const MobileStyledNotice = styled(StyledNotice)`
  font-size: 0.8rem;
`;
const StudentPage = () => {
  // This code determines whether the user accessed the program using a mobile device. It is used to adjust the size accordingly.
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const [selectedOption, setSelectedOption] = useState(2);
  const [isReservationClick, setIsReservationClick] = useState(false);
  const [scanData, setScanData] = useState('');

  // This code executes when the user selects a floor in Artecnne.
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const onReservationBtnClick = () => {
    setIsReservationClick(!isReservationClick);
  }
  // This is the code for QR code recognition using Html5QrcodeScanner.
  const handleClick = () => {

    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
  
    function success(result) {
      scanner.clear();
      sendScanResult(result);
    }
  
    function error(err) {
      console.warn(err);
    }

    scanner.render(success, error);
  };
  // This is the code that sends the information of the scanned QR to the backend.
  const sendScanResult = (result) => {
    axios
      .post('https://gcu-metaverse.shop/api/seats/checkinout', { seatId: result, memberId: localStorage.getItem("id") })
      .then((response) => {
        const responseData = response.data;
        window.alert(responseData);
        console.log(responseData);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      })
      .catch((error) => {
        window.alert("체크인/아웃 실패" + error);
        console.error(error);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      });
  };
  return (
    // We created a branching logic to adjust the styles based on the screen size for mobile devices.
    <>
      <NavigationBar />
      {isMobile ? (
        <>
          <MobileContainer>
            <MobileStyledBox>
              <MobileStyledNotice>[공지] 05월 29일 00시~2시(약 2시간) 좌석 예약 서비스 점검</MobileStyledNotice>
            </MobileStyledBox>
          </MobileContainer>
          <br />
          <MobileContainer>
            <MobileStyledBox>
              <StyleFont>
                <UserInfo />
              </StyleFont>
            </MobileStyledBox>
          </MobileContainer>
          <br />
          <MobileContainer>
            <MobileStyledHeading>아르테크네 좌석 현황 ▼</MobileStyledHeading>
            <div style={{ display: 'flex', alignItems: 'center', gap: 200 }}>
              <Form.Select value={selectedOption} onChange={handleOptionChange} style={{ width: '40vw' }}>
                <option value="">층 선택</option>
                <option value="2층">2층</option>
                <option value="3층">3층</option>
                <option value="4층">4층</option>
                <option value="5층">5층</option>
                <option value="7층">7층</option>
              </Form.Select>
              <Button
                variant="light"
                className="border border-primary border-2 fw-bold"
                onClick={handleClick}
              >
                <span style={{ whiteSpace: 'nowrap' }}>
                  체크인/아웃
                </span>
              </Button>
            </div>
          </MobileContainer>
          <MobileContainer>
            <MobileStyledBox>
              <div>
                {scanData
                  ? <div>{scanData}</div>
                  : <div id="reader"></div>
                }
              </div>
              {['3층', "4층", "5층", "7층"].includes(selectedOption) ? (
                <ArtechneVer1 option={parseInt(selectedOption)} />
              ) : (
                <ArtechneVer2 option={parseInt(selectedOption)} />
              )}
            </MobileStyledBox>
          </MobileContainer>
          <MobileContainer>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Container>
                <StyledUseBox />
                <StyledText>이용불가</StyledText>
                <StyledOpeningBox />
                <StyledText>이용가능</StyledText>
              </Container>
            </div>
          </MobileContainer>
          <br />
          <MobileContainer>
            <MobileStyledHeading onClick={onReservationBtnClick}>
              메타버스 회의실 예약 ▼
            </MobileStyledHeading>
            <MobileStyledBox>
              <Reservation />
            </MobileStyledBox>
          </MobileContainer>
        </>) : (
        <>
          <BoxContainer>
            <StyledBox>
              <StyledNotice>[공지] 05월 29일 00시~2시(약 2시간) 좌석 예약 서비스 점검</StyledNotice>
            </StyledBox>
          </BoxContainer>
          < br />
          <BoxContainer>
            <StyledBox>
              <StyleFont>
                <UserInfo />
              </StyleFont>
            </StyledBox>
          </BoxContainer>
          < br />
          <BoxContainer>
            <StyledHeading>아르테크네 좌석 현황 ▼</StyledHeading>
            <div style={{ display: 'flex', alignItems: 'center', gap: 400 }}>
              <Form.Select value={selectedOption} onChange={handleOptionChange}>
                <option value="">층 선택</option>
                <option value="2층">2층</option>
                <option value="3층">3층</option>
                <option value="4층">4층</option>
                <option value="5층">5층</option>
                <option value="7층">7층</option>
              </Form.Select>
              <Button
                variant="light"
                className="border border-primary border-2 fw-bold"
                onClick={handleClick}
              >
                <span style={{ whiteSpace: 'nowrap' }}>
                  체크인/아웃
                </span>
              </Button>
            </div>
          </BoxContainer>
          <BoxContainer>
            <StyledBox>
              <div>
                {scanData
                  ? <div>{scanData}</div>
                  : <div id="reader"></div>
                }
              </div>
              {['3층', "4층", "5층", "7층"].includes(selectedOption) ? (
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
          <BoxContainer>
            <StyledHeading onClick={onReservationBtnClick}>
              메타버스 회의실 예약 ▼
            </StyledHeading>
            <StyledBox>
              <Reservation />
            </StyledBox>
          </BoxContainer>
        </>
      )}
    </>

  );

}

export default StudentPage;