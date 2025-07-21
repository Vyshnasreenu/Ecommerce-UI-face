import { Button, Card, Modal, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import SignUpPage from '../SignUpFiles/SignUpPage'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCart, viewProductDet } from '../../../Service/reducers/shoppingSlices'
const StoreDetails = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [checking, setChecking] = useState(false);

    const [storeObject, setStoreObject] = useState({
        isCartEmpty: false,
    })

    const productState = useSelector((state) => state.shop)
    const dispatch = useDispatch()
    useEffect(() => {
        const isSign = sessionStorage.getItem("username")
        if (isSign) {
            setStoreObject({ isCartEmpty: true })

        }
    }, [])
    return (

        (!storeObject.isCartEmpty || productState.cartList.length === 0) ? (
            <div className='storeCard border '>
                <div className=''>
                    <div className='col pt-5'>
                        <img src='/images/Mobiles/cartEmpty.jpg'
                            style={{ height: "300px", width: "300px" }}
                            alt='cartEmpty' />
                    </div>
                </div>
                <div className=' p-2'>
                    <div className="col mt-2 ">
                        <h6>Your Card Is empty, Missing Cart items?</h6>
                        {storeObject.isCartEmpty ? null : (
                            <>
                                <p style={{ fontSize: "12px" }}>
                                    You must be logged in to view this page. Please Login to see the items you added previously.
                                </p>
                                <Button variant='solid'
                                    onClick={setIsLogin}
                                    color='primary'>Login</Button>
                            </>
                        )}
                    </div>
                </div>
                {
                    isLogin ? (
                        <Modal
                            open={isLogin}
                            footer={null}
                            // closable
                            maskClosable={false}
                            onCancel={() => setIsLogin(false)}
                        >
                            <SignUpPage
                                onClose={() => setIsLogin(false)}
                                setChecking={setChecking}
                            />
                        </Modal>
                    ) : null
                }
            </div>
        ) : (
            <div className='storeCard border'>
                <h3 className='text-left p-2'>Store</h3>
                <div className='border bg-white storeCardItems'>
                    <div className="d-flex justify-content-center">
                        <div className="p-2">
                            {productState.cartList?.map((item, index) => (
                                <div className='p-2'>
                                    <Card
                                        // hoverable
                                        className="border"
                                        style={{ boxShadow: "1px 2px 4px -2px" }}
                                        key={item.id}
                                        onClick={() => dispatch(viewProductDet(item))}
                                    >
                                        <div className="row">
                                            <div className="border-right col-md-3">
                                                <Link
                                                    to={`/product/${item.name}`}
                                                    className="text-decoration-none"
                                                >
                                                    <img
                                                        src={item.image}
                                                        height="130px"
                                                        className="mb-2 pt-2"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="col-md-8 text-left">
                                                <h5>{item.name}</h5>
                                                <label>Price</label> : {item.price}
                                                <div className="">{item.description}</div>
                                                <div className='mt-2 row'>
                                                    {/* <div className="col-md-6">
                                                        <span>Quantity : </span>
                                                        <Select className=''
                                                            style={{ width: 100 }}
                                                            placeholder="select "
                                                            options={[{ value: "1", label: "1" }]}
                                                        />
                                                    </div> */}
                                                    <div className="col text-right">
                                                        <Button variant='filled' color='danger' onClick={() => dispatch(removeCart(item))}>Remove to cart</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="c-6">
                            {/* Hill */}
                        </div>
                    </div >
                    {/* <div className="row">
                        <div className="col-md-6 p-3 m-2">
                            <Card>
                                <div className='row p-2 text-center'>
                                    <div className="col-md-2">
                                        <img
                                            src="/images/Mobiles/image.png"
                                            height="130px"
                                            className="mb-2 pt-2"
                                        />
                                    </div>
                                    <div className='text-left col-md-6'>
                                        <h4>Samsung</h4>
                                        <p>The Samsung Galaxy S23 Ultra is a flagship smartphone that combines top-notch hardware.</p>
                                        Price : 90000
                                        <div className='mt-2 row'>
                                            <div className="col-md-6">
                                                <span>Quantity : </span>
                                                <Select className=''
                                                    style={{ width: 100 }}
                                                    placeholder="select "
                                                    options={[{ value: "1", label: "1" }]}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <Button variant='text' color='danger'>Remove to cart</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            <hr />

                        </div>
                    </div> */}
                </div >
            </div >
        )

    )
}

export default StoreDetails