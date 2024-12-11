import { Button, Card, Col, Image, Modal, Result, Row, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductSpec from './ProductSpec'

const ProductDetails = () => {
    const [loading, setLoading] = useState(true)
    const [flag, setFlag] = useState(false)


    const [prodcutDetails, setState] = useState(useSelector((state) => state.details.prodcutDetails));

    useEffect(() => {
        const data = localStorage.getItem("product");
        if (data) {
            setState(JSON.parse(data))
        }
    }, [prodcutDetails == {}])

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false)
    //     }, 1000)
    //     return () => clearTimeout(timer)
    // }, [])

    const onMsgShower = () => {
        setFlag(true)
    }

    return (
        <div className='m-3'>
            {/* {loading && <Spin size='large' fullscreen tip="Loading...." />} */}
            <Row gutter={[24, 16]}>
                <Col
                    span={24}
                    xs={24}   // Full width on extra-small screens (mobile)
                    sm={12}   // Two cards per row on small screens (tablets)
                    md={24}    // Three cards per row on medium screens (small desktops)
                    lg={24}  // Four cards per row on large screens
                >
                    <Card>
                        <div className='row'>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col-md-4 border-right' style={{ border: "" }}>
                                        <Image.PreviewGroup
                                            items={prodcutDetails.images}
                                        >
                                            <Image src={prodcutDetails?.image}
                                                height={window.innerWidth > 760 ? "500px" : "250px"} width="100%" className='mb-2 border-bottom' />
                                        </Image.PreviewGroup>
                                    </div>
                                    <div className='text-left my-2 px-2 col-md-6'
                                    >
                                        <h5>{prodcutDetails?.name}</h5>
                                        <label>Price</label> : {prodcutDetails?.price}
                                        <div className="">
                                            {prodcutDetails?.moreInfo}
                                        </div>
                                        <div className='row p-3'>
                                            <Button
                                                className="bg-warning mx-2"
                                                color='default'
                                                variant='solid'
                                                onClick={onMsgShower}
                                            >
                                                Go To Cart
                                            </Button>
                                            <Button
                                                color='primary'
                                                variant='solid'
                                                onClick={onMsgShower}
                                            >
                                                Buy Now
                                            </Button>
                                        </div>
                                        <ProductSpec />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {flag && (
                            <Modal open={flag}
                                footer={null}
                                closable
                                onCancel={() => setFlag(false)}
                            >
                                <Result
                                    status="404"
                                    subTitle="Sorry!, This page is currently under development...."
                                    title="404"
                                />
                            </Modal>
                        )}
                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default ProductDetails