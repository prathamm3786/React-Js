import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../assets/css/style.css";
import "../assets/css/fonts.css";

const Banner = () => {
  

    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <section className="banner py-4 mt-1 position-relative overflow-hidden">
                        <div className="container">
                            <div className="row row-cols-2">
                                <div className="banner-content d-flex flex-column justify-content-center">
                                    <div className="banner-heading d-flex pb-4">
                                        <span className="fs-20 primary-color fw-bold text-decoration-underline pe-2">100%</span>
                                        <span className="fs-20 fw-bold">Organic Fruits</span>
                                    </div>
                                    <div className="banner-heading manrope d-flex pb-4 pe-5">
                                        <span className="fs-55 manrope fw-bold pe-5">Explore fresh & juicy fruits.</span>
                                    </div>
                                    <div className="banner-heading manrope d-flex pb-4 pe-5">
                                        <p className="fs-15 secondary-color pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                                    </div>
                                    <div className="banner-heading manrope d-flex pb-4 pe-5">
                                        <button className="web-button text-white primary-bg px-3 py-2 border-0 rounded-2 fw-bold">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="carousel-item">
                <section className="banner-2 py-4 mt-1 position-relative overflow-hidden">
        <div className="container">
            <div className="row row-cols-2">
                <div className="banner-content d-flex flex-column justify-content-center">
                    <div className="banner-heading d-flex pb-4">
                        <span className="fs-20 primary-color fw-bold text-decoration-underline pe-2">100%</span>
                        <span className="fs-20 fw-bold">Organic Fruits</span>
                    </div>
                    <div className="banner-heading manrope d-flex pb-4 pe-5">
                        <span className="fs-55 manrope fw-bold pe-5">The best way to stuff your wallet.</span>
                    </div>
                    <div className="banner-heading manrope d-flex pb-4 pe-5">
                        <p className="fs-15 secondary-color pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                    </div>
                    <div className="banner-heading manrope d-flex pb-4 pe-5">
                        <button className="web-button text-white primary-bg px-3 py-2 border-0 rounded-2 fw-bold">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
                </div>
                
            </div>
        </div>

    );
};

export default Banner;
