import { Button, Card, Row, Col, Image, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { mobileProducts } from './productsStore'
import { ADD_TO_CART } from '../../Service/constrainsTypes'
import { addShoppingCart, removeShoppingCart, viewCart } from '../../Service/Action/CartAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const DashBoard = ({ products }) => {

    const cartList = useSelector(state => state.shop.cartList)
    const dispatchHandler = useDispatch();


    // const addProductItem = (product) => {
    //     // if (activeProductId.includes(product.id)) {
    //     setActiveProductId((pre) => ([...pre, product]))

    //     // }
    //     dispatchHandler(addShoppingCart(product))
    // }

    // const removeProductItem = (product) => {
    //     const newActiveId = { ...activeProductId }
    //     console.log(newActiveId)
    //     const index = newActiveId.findIndex((item) => item.id === product.id)
    //     console.log(index)
    //     newActiveId?.splice(product.id, index)
    //     setActiveProductId(newActiveId)
    //     dispatchHandler(removeShoppingCart(product))
    // }

    const openFullDetailsOfProduct = (product) => {

    }

    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false)
    //     }, 1000)
    //     return () => clearTimeout(timer)
    // }, [])


    return (
        <>
            <main className='mt-3'>
                {/* {loading && <Spin size='large' fullscreen tip="Loading...." />} */}

                <div className='m-2 p-2'>
                    <h4 className='text-left'>Mobiles</h4>
                    <div>
                        <Row gutter={[16, 24]}>

                            {mobileProducts.map((item, index) => (
                                <Col span={6} key={item.id}
                                    xs={24}   // Full width on extra-small screens (mobile)
                                    sm={10}   // Two cards per row on small screens (tablets)
                                    md={12}    // Three cards per row on medium screens (small desktops)
                                    lg={6}  // Four cards per row on large screens
                                >
                                    <Link to={`/product/${item.name}`}
                                        className='text-decoration-none'
                                    >
                                        <Card hoverable
                                            className=''
                                            style={{ height: "100%", width: "100%" }}
                                            key={item.id}
                                            onClick={() => dispatchHandler(viewCart(item))}
                                        >
                                            <div className='border-bottom'>
                                                <img src={item.image} height="130px" className='mb-2 pt-2' />
                                            </div>
                                            <div className='text-left my-2 px-2'
                                            >
                                                <h5>{item.name}</h5>
                                                <label>Price</label> : {item.price}
                                                <div className="">
                                                    {item.description}
                                                </div>
                                                {/* <div className="cardAction mt-3">
                                                <Button
                                                    color='primary'
                                                    className='mb-2 mr-2'
                                                    variant='solid'
                                                    onClick={() => addProductItem(item)}
                                                >
                                                    Go To Cart
                                                </Button>
                                                <span></span>
                                                <Button
                                                    color='danger'
                                                    disabled={!activeProductId.includes(item.id)}
                                                    variant='filled'
                                                    onClick={() => removeProductItem(item)}
                                                >
                                                    Remove Item
                                                </Button>
                                            </div> */}
                                            </div>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>

                    </div>
                </div>

            </main >
        </>
    )
}

export default DashBoard