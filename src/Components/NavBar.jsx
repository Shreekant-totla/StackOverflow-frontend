import React from 'react'
import SignUp from '../Pages/SignUp'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div style={{backgroundColor:"#333", color:"white", height:"80px"}}>
        <Link to="/signup"><Button mt="20px">SignUp</Button></Link>
        <Link to="/signin"><Button mt="20px">SignIn</Button></Link>
        <Link to="/"><Button mt="20px">Home</Button></Link>
        <Link to="/forum"><Button mt="20px">Forum</Button></Link>
        
    </div>
  )
}

export default NavBar
