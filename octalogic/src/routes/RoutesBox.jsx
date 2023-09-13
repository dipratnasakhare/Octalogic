import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';

export const RoutesBox = () => {
    return (
        <div>
            <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path='/' element={<Home />} />
       
      </Routes> 
        </div>
    )
}
