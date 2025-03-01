import React from 'react'
import './people.css';

const People = () => {
    return (
        <>
            <section className='word'>
                <div className="container">
                    <div className="row">
                        <div className="word-tital text-center">
                            <h2>Great Words From People</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore lacus vel facilisis. </p>
                        </div>

                        <div className="col-lg-4 text-center">
                            <div className="co">
                                <div className="co-img">
                                    <img src="src/img/221.jpg" alt="" />
                                </div>
                                <div className="founder">
                                    <span>Co Founder</span>
                                    <h5>Stephen Smith</h5>
                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis."</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 text-center">
                            <div className="co">
                                <div className="co-img">
                                    <img src="src/img/222.jpg" alt="" />
                                </div>
                                <div className="founder">
                                    <span>Manager</span>
                                    <h5>Lorem Robinson</h5>
                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis."</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 text-center">
                            <div className="co">
                                <div className="co-img">
                                    <img src="src/img/223.jpg" alt="" />
                                </div>
                                <div className="founder">
                                    <span>Team Leader</span>
                                    <h5>Saddika Alard</h5>
                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis."</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default People
