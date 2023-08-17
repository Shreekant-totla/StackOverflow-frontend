import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import ForumPage from './ForumPage'
import PrivateRoute from '../Components/PrivateRoute'
import NavBar from '../Components/NavBar'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/forum" element={<PrivateRoute><ForumPage/></PrivateRoute>}/>
        <Route path="/" />
    </Routes>
  )
}

export default AllRoutes