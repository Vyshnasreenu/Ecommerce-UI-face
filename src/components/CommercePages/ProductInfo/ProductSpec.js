import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ProductSpec = () => {

    const [prodcutDetails, setState] = useState(useSelector((state) => state.shop.prodcutDetails));
    useEffect(() => {
        const data = localStorage.getItem("product");
        if (data) {
            setState(JSON.parse(data))
        }
    }, [])
    return (
        <div>
            <div className='p-2 mt-2'>
                <h4>Specilization</h4>
                <div className="p-1">
                    <h6><b>Chipset :</b> </h6>
                    {" "}
                    {prodcutDetails.ProcessorAndPerformance?.Chipset?.map((item, index) => (
                        <ul key={item.id}>
                            <li>
                                <span> {item}</span>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="p-1">
                    <h6><b>CPU : </b></h6>
                    {" "}
                    {prodcutDetails.ProcessorAndPerformance?.CPU?.map((item, index) => (
                        <ul>
                            <li>
                                <span> {item}</span>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="p-1">
                    <h6><b>Memory :</b> </h6>
                    {" "}
                    {prodcutDetails.ProcessorAndPerformance?.Memory?.map((item, index) => (
                        <ul>
                            <li>
                                <strong>{item.name} </strong>
                                : {item.msg}
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="p-1">
                    <h6><b>Display :</b> </h6>
                    {" "}
                    {prodcutDetails.ProcessorAndPerformance?.Display?.map((item, index) => (
                        <ul>
                            <li>
                                <strong>{item.name} </strong>
                                : {item.msg}
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="p-1">
                    <h6><b>CameraSystem : </b></h6>
                    {" "}
                    {prodcutDetails.ProcessorAndPerformance?.CameraSystem?.map((item, index) => (
                        <>
                            <h6>{item.name} : </h6>
                            <ul>
                                <li>
                                    {item?.list?.map((list) => (
                                        <li>
                                            <strong>{list.name}</strong>
                                            : {list.msg}</li>
                                    )) || item.msg}
                                </li>
                            </ul>
                        </>
                    ))}
                </div>
                <div className="p-1">
                    <h6><b>Battery and Charging :</b> </h6>
                    {" "}
                    {prodcutDetails.ProcessorAndPerformance?.BatteryAndCharging?.map((item, index) => (
                        <ul>
                            <li>
                                <strong>{item.name} </strong>
                                : {item.msg}
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="p-1">
                    <h6><b>Operating System:</b> </h6>
                    {" "}
                    {prodcutDetails.ProcessorAndPerformance?.OperatingSystem?.map((item, index) => (
                        <ul>
                            <li>
                                <strong>{item.name} </strong>
                                : {item.msg}
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="p-1">
                    <h6><b>Connectivity :</b> </h6>
                    {" "}
                    {prodcutDetails.ProcessorAndPerformance?.Connectivity?.map((item, index) => (
                        <ul>
                            <li>
                                <strong>{item.name} </strong>
                                : {item.msg}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductSpec