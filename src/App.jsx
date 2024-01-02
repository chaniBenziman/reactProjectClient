import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/admin/login'
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';
import Home from './components/user/Home';
import Service from './components/admin/Service';
import Meeting from './components/admin/Meeting';
import BusinessData from './components/admin/BusinessData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>{/**switch */}
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"Admin"} element={<Login/>} >
            <Route path={"services"} element={<Service/>}></Route>
            <Route path={"meetings"} element={<Meeting/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
