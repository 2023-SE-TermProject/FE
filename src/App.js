import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css"
import Login from "./components/Login";
import NavigationBar from './components/NavigationBar';
import ReservationStatus from './components/ReservationStatus';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/studentpage" element={[<ReservationStatus />, <NavigationBar />]} />
          {/* 임시 */}
          <Route path="/adminpage" element={[<ReservationStatus />, <NavigationBar />]} />
        </Routes>
      </div>
    </Router>
  )
  
}

export default App;
