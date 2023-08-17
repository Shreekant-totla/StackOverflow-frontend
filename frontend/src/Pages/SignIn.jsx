import { Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate()
    const [loginData,setLoginData] = useState({
        email:"",
        password:"",
    });

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setLoginData({...loginData, [name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.get(`https://stackoverflow-grwx.onrender.com/users?email=${loginData.email}&password=${loginData.password}`)
            if(response.data.length===1){
                localStorage.setItem("isAuth",true)
                alert("Login Successful");
                navigate("/forum")
            }else{
                alert("Invalid Credentials")
            }

        }catch(err){
            console.log("Error while sign in")
        }
    }

  return (
    <>
        <Heading mt="50px">SignIn</Heading>
    <form onSubmit={handleSubmit} style={{width:"40%", margin:"auto", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px", marginTop:"100px", paddingTop:"50px", paddingBottom:"50px"}}>
        <FormControl width="50%" margin="auto">
            <FormLabel mt="10px">Email</FormLabel>
            <Input mt="10px" type="email" name="email" onChange={handleInputChange}/>
            <FormLabel mt="10px">Password</FormLabel>
            <Input mt="10px" type="password" name="password" onChange={handleInputChange}/>
        </FormControl>
        <Button mt="20px" type="submit">Sign In</Button>
    </form>
    </>
  )
}

export default SignIn