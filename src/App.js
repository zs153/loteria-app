// import './App.css';
import Register from './pages/register/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <Register />
    </Router>
    // <Router>
    //   <Routes>
    //     {/*
    //     <Route exact path="/profile/:username" element={<Profile />} /> */}
    //     <Route exact path="/" element={user ? <Home /> : <Register />} />
    //     <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
    //     <Route
    //       path="/register"
    //       element={user ? <Navigate to="/" /> : <Register />}
    //     />
    //   </Routes>
    // </Router>
  )
}

export default App
