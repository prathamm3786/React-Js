import React from 'react'
import './fresh.css'

const Fresh = () => {
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-4">
                        <div className="fresh-img">
                            <img src="src/img/fresh-3.jpg" alt="" />
                            <div className="fresh-content">
                                <h5>Fresh & healthy
                                    <br></br>
                                    Organic Fruits
                                </h5>
                                <p><span>35%</span>on first order</p>
                                <button className="btn">Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="fresh-img">
                            <img src="src/img/fresh-1.jpg" alt="" />
                            <div className="fresh-content">
                                <h5>Healthy
                                    <br></br>
                                    Bakery Products
                                </h5>
                                <p><span>30%</span>on first order</p>
                                <button className="btn">Shop Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="fresh-img">
                            <img src="src/img/fresh-2.jpg" alt="" />
                            <div className="fresh-content">
                                <h5>Fresh
                                    <br></br>
                                    Snacks & Sweets
                                </h5>
                                <p><span>20%</span>on first order</p>
                                <button className="btn">Shop Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Fresh
