import ReservationStatus from "./ReservationStatus";
import SeatStatus from "./SeatStatus";
import styled from 'styled-components';
{/*
 UserInfo.js connects the reservation status components.
 The reservation status components include SeatStatus for Artecnne seat reservations and ReservationStatus for Metaverse meeting room reservations.
*/}
 
const StyleHead = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  text-align: left;
`;

const UserInfo = () => {

    return (
      <div>
            <StyleHead>나의 예약 현황</StyleHead>
            <SeatStatus />
            <ReservationStatus />
      </div>
      );
}

export default UserInfo;