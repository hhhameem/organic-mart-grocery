import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Pages/Home/Home/Home';
import About from './Components/Pages/About/About';
import Login from './Components/Pages/LoginPage/Login/Login ';
import Registration from './Components/Pages/LoginPage/Registration/Registration';
import AuthProvider from './Components/Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
