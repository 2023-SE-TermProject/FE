import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css"
import Login from "./components/Login";
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <div>
        {/* 임시로 네비게이션 붙였습니다. */}
        <NavigationBar/>
          <Login />
      </div>
    </Router>
  )
}

export default App;
