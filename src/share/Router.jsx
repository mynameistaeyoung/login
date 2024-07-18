import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router