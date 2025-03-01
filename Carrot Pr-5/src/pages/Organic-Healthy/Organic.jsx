import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import './organic.css';

const Organic = () => {
    return (
        <>
            <section className='organ'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex">
                            <div className="col-lg-7 d-flex">
                                <div className="col-lg-4 ">
                                    <div className="card" style={{width:'240px'}}>
                                        <div className="card-img">
                                            <img src="src/img/1.jpg" className="card-img-top" alt="..." />
                                        </div>

                                        <div className="card-body text-center">
                                            <span>Vegetables</span>
                                            <div className="star d-flex py-2">
                                                <FaStar style={{ color: 'yellow' }} />
                                                <FaStar style={{ color: 'yellow' }} />
                                                <FaStar style={{ color: 'yellow' }} />
                                                <FaStar style={{ color: 'yellow' }} />
                                                <CiStar />
                                            </div>
                                            <p>Fresh organic villa farm lomon 500gm pack</p>
                                            <a href="#">$120.25</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-4">
                                    <div className="card" style={{width:'240px'}}>
                                        <div className="card-img">
                                            <img src="src/img/1.jpg" className="card-img-top" alt="..." />
                                        </div>

                                        <div className="card-body text-center">
                                            <span>Vegetables</span>
                                            <div className="star d-flex py-2">
                                                <FaStar style={{ color: 'yellow' }} />
                                                <FaStar style={{ color: 'yellow' }} />
                                                <FaStar style={{ color: 'yellow' }} />
                                                <FaStar style={{ color: 'yellow' }} />
                                                <CiStar />
                                            </div>
                                            <p>Fresh organic villa farm lomon 500gm pack</p>
                                            <a href="#">$120.25</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-4">
                                    <div className="card" style={{width:'240px'}}>
                                        <div className="card-img">
                                            <img src="src/img/1.jpg" className="card-img-top" alt="..." />
                                        </div>

                                        <div className="card-body text-center">
                                            <span>Vegetables</span>
                                            <div className="star d-flex py-2">
                                                <FaStar style={{ color: 'yellow' }} />
                                                <FaStar style={{ color: 'yellow' }} />
                                                <FaStar style={{ color: 'yellow' }} />
                                                <FaStar style={{ color: 'yellow' }} />
                                                <CiStar />
                                            </div>
                                            <p>Fresh organic villa farm lomon 500gm pack</p>
                                            <a href="#">$120.25</a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-5 ">
                                <div className="oran-body">
                                    <img src="src/img/products-rightview.jpg" alt="" />
                                    <div className="oran-text">
                                        <h4>Organic & Healthy <br></br>  Vegetables</h4>
                                        <span>25% off</span>
                                        <button className='btn'>Shop Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Organic
