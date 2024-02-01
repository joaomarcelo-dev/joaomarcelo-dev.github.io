import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import SingIn from '../pages/Login/SingIn'

export default function RoutesAPP() {
  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/login" element={<SingIn />}/>
    </Routes>
  )
}