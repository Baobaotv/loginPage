import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignupPage from './Pages/SignupPage';
import Home from './Pages/Home';
import About from './Pages/About'
import Approval from './Pages/Approval'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <Router>
  <Routes>
    <Route path="/" element={<div><ToastContainer position='top-center'/><LoginPage/></div>} />
    <Route path="/register" element={<div><ToastContainer position='top-center'/><SignupPage/></div>} />
    <Route path="/home" element={<Home></Home>} />
    <Route path="/home/about" element={<About/>} />
    <Route path="/home/approval" element={<Approval/>} />
  </Routes>
</Router>
  );
}


export default App;
