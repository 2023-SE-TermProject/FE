import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css"
import Login from "./pages/Login";
import StudentPage from './pages/StudentPage';
import AdminPage from './pages/AdminPage';
import LoginAuth from './pages/Loginauth';

function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/loginauth" element={<LoginAuth />} />
          <Route path="/studentpage" element={<StudentPage />} />
          {/* 임시 */}
          <Route path="/adminpage" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  )
  
}

export default App;
