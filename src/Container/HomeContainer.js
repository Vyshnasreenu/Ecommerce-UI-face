import React, { useEffect } from 'react'
import { addShoppingCart, removeShoppingCart } from '../Service/Action/CartAction'
import { connect, useDispatch, useSelector } from 'react-redux'
import Home from '../components/redux_point/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from '../components/redux_point/ProductDetails'
import NavBar from '../components/redux_point/NavBar'




const HomeContainer = ({ }) => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/product/:index" element={
                        <>
                            <NavBar />
                            <ProductDetails />
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default HomeContainer