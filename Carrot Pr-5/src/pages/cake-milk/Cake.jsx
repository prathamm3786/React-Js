import React from 'react'
import './cake.css'

const Cake = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="cake mt-5">
                        <div className="col-lg-12 d-flex">
                            <div className="col-lg-4">
                                <div className="box">
                                    <h5>Cake & Milk</h5>
                                    <span>(65 item)</span>
                                </div>
                                <div className="box">
                                    <h5>Fresh Meat</h5>
                                    <p>(30 items)</p>
                                </div>
                                <div className="box">
                                    <h5>Vegetables</h5>
                                    <p>(25 items)</p>
                                </div>
                                <div className="box">
                                    <h5>Apple & Mango</h5>
                                    <p>(45 items)</p>
                                </div>
                                <div className="box">
                                    <h5>Strawberry</h5>
                                    <p>(68 items)</p>
                                </div>
                                <div className="box">
                                    <h5>View More</h5>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex">

                                <div className="col-lg-6">
                                    <div className="hart-cake">
                                        <h2>50% off</h2>
                                        <h5>Cake</h5>
                                        <button className='btn'>Shop Now</button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="milk">
                                        <h2>40% off</h2>
                                        <h5>Milk</h5>
                                        <button className='btn'>Shop Now</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cake
