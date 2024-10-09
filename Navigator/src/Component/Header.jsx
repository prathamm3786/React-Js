import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex align-items-center  navbar-light">
                <div className="container-fluid">
                    {/* <h2 className="navbar-brand p-2" href="#" style={{marginLeft:"350px",fontSize:"25px"}}>React Crud</h2> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item me-3 ">
                                <Link to="/" className="nav-link active mt-2" aria-current="page" href="#" style={{backgroundColor:"black",borderRadius:"10px",color:"white",border:"1px solid white",width:"70px",height:"35px",textAlign:"center",fontSize:"15px"}}>Add</Link>
                            </li>
                            <li className="nav-item ms-2">
                                <Link to="/view" className="nav-link active mt-2" aria-current="page" href="#" style={{backgroundColor:"black",borderRadius:"10px",color:"white",border:"1px solid white",width:"70px",height:"35px",textAlign:"center",fontSize:"15px"}}>View</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
