import React from 'react';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
      const isAuth = localStorage.getItem("isAuth");
    return  isAuth?children:<Navigate to="/signin"/>
}

export default PrivateRoute;
