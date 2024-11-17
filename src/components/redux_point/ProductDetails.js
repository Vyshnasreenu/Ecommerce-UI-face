import { Button, Card, Col, Row } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetails = () => {

    const prodcutDetails = useSelector(state => state.details.prodcutDetails)
    console.log(prodcutDetails, "product")
    return (
        <div className='m-3'>
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
                                    <div className='col-md-4 border' style={{ border: " groove" }}>
                                        <img src={prodcutDetails?.image}
                                            height={window.innerWidth > 760 ? "500px" : "250px"} width="100%" className='mb-2' />
                                    </div>
                                    <div className='text-left my-2 px-2 col-md-6'
                                    >
                                        <h5>{prodcutDetails?.name}</h5>
                                        <label>Price</label> : {prodcutDetails?.price}
                                        <div className="">
                                            {prodcutDetails?.moreInfo}
                                        </div>
                                        <div className='row p-3'>
                                            <Button className="bg-warning mx-2" color='default' variant='solid'>Go To Cart</Button>
                                            <Button className='' color='primary' variant='solid'>Buy Now</Button>
                                        </div>
                                        <div className='p-1 mt-2'>
                                            <h4>Specilization</h4>
                                            <div className="">
                                                <h6>Chipset : </h6>
                                                {" "}
                                                {prodcutDetails.ProcessorAndPerformance?.Chipset?.map((item, index) => (
                                                    <ul>
                                                        <li>
                                                            <span> {item}</span>
                                                        </li>
                                                    </ul>
                                                ))}
                                            </div>
                                            <div className="">
                                                <h6>CPU : </h6>
                                                {" "}
                                                {prodcutDetails.ProcessorAndPerformance?.CPU?.map((item, index) => (
                                                    <ul>
                                                        <li>
                                                            <span> {item}</span>
                                                        </li>
                                                    </ul>
                                                ))}
                                            </div>
                                            <div className="">
                                                <h6>Memory : </h6>
                                                {" "}
                                                {prodcutDetails.ProcessorAndPerformance?.Memory?.map((item, index) => (
                                                    <ul>
                                                        <li>
                                                            <b>{item.name} </b>
                                                            : {item.msg}
                                                        </li>
                                                    </ul>
                                                ))}
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default ProductDetails