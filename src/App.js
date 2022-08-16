import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import ProtectedRoute from "./context/ProtectedRoute";


function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<ProtectedRoute>{<Home/>}</ProtectedRoute>} />
        </Routes>
    </>
  );
}

export default App;