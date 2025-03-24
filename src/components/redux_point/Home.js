import React from 'react'
import DashBoard from './DashBoard'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = ({ cartList, dispatch }) => {


    return (
        <div style={{ background: "#f8f9fa" }}>
            <NavBar />
            <DashBoard />
        </div>
    )
}

export default Home