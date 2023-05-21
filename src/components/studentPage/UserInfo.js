import ReservationStatus from "./ReservationStatus";
import SeatStatus from "./SeatStatus";

const UserInfo = () => {

    return (
        <div>
          <h2>나의 예약 현황</h2>
          <SeatStatus />
          <ReservationStatus />
        </div>
      );
}

export default UserInfo;