import React from 'react'
import shopStyle from '../cart.css'
import { useSelector } from 'react-redux'
import { Avatar, Badge } from 'antd'
import { Link } from 'react-router-dom'
const NavBar = () => {

    const itemCount = useSelector(state => state.shop.itemIncreament)
    return (
        <>
            <section className="parentNav">
                <article className="articleNav">
                    <div className='row p-3'>
                        <h3 className='col-md-6'>
                            <span className='titleNav p-1'>
                                <Link to="/" className='titleNav'>ShoppingCart DashBoard</Link>
                            </span>
                        </h3>
                        <div className='col-md-6 text-right'>
                            <h4>
                                <span className='titleNav'>
                                    <label className=''>Cart</label>
                                    <Badge count={itemCount || 0} className='ml-2' color=''>
                                        <Avatar shape='square' size="large" icon={
                                            <i class="fa-solid fa-cart-shopping"></i>
                                        } />
                                    </Badge>
                                </span>
                            </h4>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default NavBar