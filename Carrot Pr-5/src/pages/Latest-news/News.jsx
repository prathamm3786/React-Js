import React from 'react'
import './news.css'
const News = () => {
    return (
        <>
            <section className='latest'>
                <div className="container">
                    <div className="row">
                        <div className="word-tital text-center">
                            <h2>Latest News</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore lacus vel facilisis. </p>
                        </div>

                        <div className="col-lg-3">
                            <div className="latest-card">
                                <div className="latest-body">
                                    <span>By Admin | <a href="">Snacks</a></span>
                                    <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                    <a href="#">Read More</a>
                                </div>
                                <div className="latest-img">
                                    <img src="src/img/331.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="latest-card">
                                <div className="latest-body">
                                    <span>By Admin | <a href="">Food</a></span>
                                    <h5>Best guide to Shopping for organic ingredients.</h5>
                                    <a href="#">Read More</a>
                                </div>
                                <div className="latest-img">
                                    <img src="src/img/332.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="latest-card">
                                <div className="latest-body">
                                    <span>By Admin | <a href="">Snacks</a></span>
                                    <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                    <a href="#">Read More</a>
                                </div>
                                <div className="latest-img">
                                    <img src="src/img/333.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="latest-card">
                                <div className="latest-body">
                                    <span>By Admin | <a href="">Vegetable</a></span>
                                    <h5>Condimentum Nam enim bestMorbi odio sodales.</h5>
                                    <a href="#">Read More</a>
                                </div>
                                <div className="latest-img">
                                    <img src="src/img/331.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default News
