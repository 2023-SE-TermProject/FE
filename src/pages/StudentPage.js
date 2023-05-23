import NavigationBar from "../components/NavigationBar";
import UserInfo from "../components/studentPage/UserInfo";
import React, { useState } from "react";
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
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
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [selectedOption, setSelectedOption] = useState('2층');

    const [isReservationClick, setIsReservationClick] = useState(false);

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
      // 선택된 옵션에 대한 추가적인 처리 수행
    };
    const handleClick = () => {
        setIsCheckedIn(!isCheckedIn);
    };

    const onReservationBtnClick = () => {
        setIsReservationClick(!isReservationClick);
    }

    return (
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 200}}>
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
                {isCheckedIn ? '체크아웃' : '체크인'}
            </span>
            </Button>
        </div>
        </MobileContainer>
        <MobileContainer>
        <MobileStyledBox>
            {['2층', '3층'].includes(selectedOption) ? (
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
        </>
    //     <>
    //     <NavigationBar />
    //    {isMobile ? (
    //     <>
    //     <MobileContainer>
    //     <MobileStyledBox>
    //         <MobileStyledNotice>[공지] 05월 29일 00시~2시(약 2시간) 좌석 예약 서비스 점검</MobileStyledNotice>
    //     </MobileStyledBox>
    //     </MobileContainer>
    //     <br />
    //     <MobileContainer>
    //     <MobileStyledBox>
    //         <StyleFont>
    //         <UserInfo />
    //         </StyleFont>
    //     </MobileStyledBox>
    //     </MobileContainer>
    //     <br />
    //     <MobileContainer>
    //     <MobileStyledHeading>아르테크네 좌석 현황 ▼</MobileStyledHeading>
    //     <div style={{ display: 'flex', alignItems: 'center', gap: 200}}>
    //         <Form.Select value={selectedOption} onChange={handleOptionChange}>
    //         <option value="">층 선택</option>
    //         <option value="2층">2층</option>
    //         <option value="3층">3층</option>
    //         <option value="4층">4층</option>
    //         <option value="5층">5층</option>
    //         <option value="7층">7층</option>
    //         </Form.Select>
    //         <Button
    //         variant="light"
    //         className="border border-primary border-2 fw-bold"
    //         onClick={handleClick}
    //         >
    //         <span style={{ whiteSpace: 'nowrap' }}>
    //             {isCheckedIn ? '체크아웃' : '체크인'}
    //         </span>
    //         </Button>
    //     </div>
    //     </MobileContainer>
    //     <MobileContainer>
    //     <MobileStyledBox>
    //         {['2층', '3층'].includes(selectedOption) ? (
    //         <ArtechneVer1 option={parseInt(selectedOption)} />
    //         ) : (
    //         <ArtechneVer2 option={parseInt(selectedOption)} />
    //         )}
    //     </MobileStyledBox>
    //     </MobileContainer>
    //     <MobileContainer>
    //     <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    //         <Container>
    //         <StyledUseBox />
    //         <StyledText>이용불가</StyledText>
    //         <StyledOpeningBox />
    //         <StyledText>이용가능</StyledText>
    //         </Container>
    //     </div>
    //     </MobileContainer>
    //     <br />
    //     <MobileContainer>
    //     <MobileStyledHeading onClick={onReservationBtnClick}>
    //         메타버스 회의실 예약 ▼
    //     </MobileStyledHeading>
    //     <MobileStyledBox>
    //         <Reservation />
    //     </MobileStyledBox>
    //     </MobileContainer>
    //     </>) : (
    //     <>
    //     <BoxContainer>
    //             <StyledBox>
    //                 <StyledNotice>[공지] 05월 29일 00시~2시(약 2시간) 좌석 예약 서비스 점검</StyledNotice>
    //             </StyledBox>
    //         </BoxContainer>
    //         < br />
    //         <BoxContainer>
    //             <StyledBox>
    //                 <StyleFont>
    //                     <UserInfo />
    //                 </StyleFont>
    //             </StyledBox>
    //         </BoxContainer>
    //         < br />
    //         <BoxContainer>
    //             <StyledHeading>아르테크네 좌석 현황 ▼</StyledHeading>
    //             <div style={{ display: 'flex', alignItems: 'center', gap: 400}}>
    //                 <Form.Select value={selectedOption} onChange={handleOptionChange}>
    //                     <option value="">층 선택</option>
    //                     <option value="2층">2층</option>
    //                     <option value="3층">3층</option>
    //                     <option value="4층">4층</option>
    //                     <option value="5층">5층</option>
    //                     <option value="7층">7층</option>
    //                 </Form.Select>
    //                 <Button
    //                 variant="light"
    //                 className="border border-primary border-2 fw-bold"
    //                 onClick={handleClick}
    //                 >
    //                 <span style={{ whiteSpace: 'nowrap' }}>
    //                     {isCheckedIn ? '체크아웃' : '체크인'}
    //                 </span>
    //                 </Button>
    //             </div>
    //         </BoxContainer>
    //         <BoxContainer>
    //             <StyledBox>
    //                 {['2층', '3층'].includes(selectedOption) ? (
    //                     <ArtechneVer1 option={parseInt(selectedOption)} />
    //                 ) : (
    //                     <ArtechneVer2 option={parseInt(selectedOption)} />
    //                 )}
    //             </StyledBox>
    //         </BoxContainer>
    //         <BoxContainer>
    //             <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    //                 <Container>
    //                     <StyledUseBox />
    //                     <StyledText>이용불가</StyledText>
    //                     <StyledOpeningBox />
    //                     <StyledText>이용가능</StyledText>
    //                 </Container>
    //             </div>
    //         </BoxContainer>
    //         <br />
    //         <BoxContainer>
    //             <StyledHeading onClick={onReservationBtnClick}>
    //                 메타버스 회의실 예약 ▼ 
    //             </StyledHeading>
    //             <StyledBox>
    //                 <Reservation />
    //             </StyledBox>
    //         </BoxContainer> 
    //         </>
    //     )}
    //     </>

    )

}

export default StudentPage;