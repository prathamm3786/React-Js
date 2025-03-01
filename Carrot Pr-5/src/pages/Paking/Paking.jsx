import React from 'react'
import { RiRedPacketLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa6";

import './packing.css';


const Paking = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 text-center">
                        <div className="packing">
                            <span><RiRedPacketLine /></span>
                            <h5>Product Packing</h5>
                            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 text-center">
                        <div className="packing">
                            <span><BiSupport /></span>
                            <h5>24X7 Support</h5>
                            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 text-center">
                        <div className="packing">
                            <span><TbTruckDelivery /></span>
                            <h5>Delivery in 5 Days</h5>
                            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 text-center">
                        <div className="packing">
                            <span><FaDollarSign /></span>
                            <h5>Payment Secure</h5>
                            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Paking
