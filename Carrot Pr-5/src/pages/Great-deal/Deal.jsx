import React from 'react'
import './deal.css'

const Deal = () => {
    return (
        <>
            <section className='great'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-6">
                            <div className="deal-body">
                                <h5>35% <span>OFF</span></h5>
                                <h3>Great deal on organic food.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                <div className="counter d-flex">
                                    <h4>
                                        <span>116    : </span>
                                        Days
                                    </h4>
                                    <h4>
                                        <span>20 :</span>
                                        Hrs
                                    </h4>
                                    <h4>
                                        <span>01 :</span>
                                        Min
                                    </h4>
                                    <h4>
                                        <span>31 </span>
                                        Sec
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Deal
