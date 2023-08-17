import { Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios";
import NavBar from '../Components/NavBar';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username:"",
        avatar:"",
        email:"",
        password:"",
    });

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("https://stackoverflow-grwx.onrender.com/users",formData);
            if(response.status===201){
                navigate("/signin")
            }
            

        }catch(err){
            console.log("Error while sign up")
        }
       
    }


  return (<>
  {/* <NavBar/> */}
  <Heading mt="50px">SignUp Form</Heading>
    <form onSubmit={handleSubmit} style={{width:"40%", margin:"auto", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px", marginTop:"100px", paddingTop:"50px", paddingBottom:"50px"}}>
        <FormControl width="50%" margin="auto">
            <FormLabel >Username</FormLabel>
            <Input mt="10px" type="text" name="username" onChange={handleInputChange}/>
            <FormLabel mt="10px">Avatar</FormLabel>
            <Input mt="10px" type="text" name="avatar" onChange={handleInputChange}/>
            <FormLabel mt="10px">Email</FormLabel>
            <Input mt="10px" type="email" name="email" onChange={handleInputChange}/>
            <FormLabel mt="10px">Password</FormLabel>
            <Input mt="10px" type="password" name="password" onChange={handleInputChange}/>
        </FormControl>
        <Button mt="20px" type="submit">Sign Up</Button>
    </form>
    </>
  )
}

export default SignUp
