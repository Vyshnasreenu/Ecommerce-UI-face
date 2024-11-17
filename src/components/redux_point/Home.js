import React from 'react'
import DashBoard from './DashBoard'
import NavBar from './NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = ({ cartList, dispatch }) => {


    return (
        <>
            <NavBar />
            <DashBoard />
        </>
    )
}

export default Home