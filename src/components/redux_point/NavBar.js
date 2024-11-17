import React, { useState } from 'react'
import shopStyle from '../cart.css'
import { useSelector } from 'react-redux'
import { Avatar, Badge, Button, Modal, Result } from 'antd'
import { Link } from 'react-router-dom'
const NavBar = () => {

    const itemCount = useSelector(state => state.shop.itemIncreament)
    const [storeflag, setStoreFlag] = useState(false)
    return (
        <>
            <section className="parentNav">
                <article className="articleNav">
                    <div className='p-3'>
                        <div className='col'>
                            <div className='row'>
                                <h3 className='col-md-6 text-left'>
                                    <span className='titleNav p-1'>
                                        <Link to="/" className='titleNav' >
                                            <i class="fa-brands fa-kickstarter fa-2xl mx-1" style={{ color: "" }}></i>
                                            artZon
                                        </Link>
                                    </span>
                                </h3>
                                <div className='col-md-6 text-right'>
                                    <h4>
                                        {/* <Link to='/' className='titleNav'> */}
                                        <Button className='p-3' variant='solid' onClick={() => { setStoreFlag(true) }}>
                                            Store
                                            {/* <Badge count={itemCount || 0} className='ml-2' color=''>
                                                <Avatar shape='square' size="large" icon={
                                                    } />
                                                    </Badge> */}
                                            <i class="fa-solid fa-cart-shopping fa-xl"></i>
                                        </Button>
                                        {/* </Link> */}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section >
            {storeflag && (
                <Modal open={storeflag}
                    footer={null}
                    closable
                    onCancel={() => setStoreFlag(false)}
                >
                    <Result
                        status="404"
                        subTitle="Sorry!, This page is currently under development...."
                        title="404"
                    />
                </Modal>
            )}
        </>
    )
}

export default NavBar