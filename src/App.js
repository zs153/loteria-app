// import './App.css';
import Pedidos from './pages/pedido/Pedidos'
import Registro from './pages/registro/Registro'
import Login from './pages/login/Login'
import Home from './pages/home/Home'

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
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/pedidos' element={<Pedidos />} />
        <Route exact path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
      </Routes>
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
