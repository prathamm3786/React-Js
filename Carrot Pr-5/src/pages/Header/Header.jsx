import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import styles from './header.module.css';


const Header = () => {
    return (
        <>
            <div className="container">
                <div className={styles.row}>
                        <nav className="navbar navbar-expand-lg align-item-center" >
                            <div className="container-fluid">
                                <img src="src/img/logo.png" alt="" />
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                    <div className="col-lg-6">
                                        <form className="d-flex" role="search">
                                            <input type="text" placeholder="Search for item" />
                                            <select>
                                                <option>All Categories</option>
                                                <option>Mens</option>
                                                <option>Womens</option>
                                                <option>Electronics</option>
                                            </select>

                                            <button className="btn btn-success"><FaSearch />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="logo justify-content-end d-flex align-items-center">
                                            <div className="logo-png">
                                                <h5 className="mx-3"><FaRegUser /> Account</h5>
                                            </div>
                                            <div className="logo-png">
                                                <h5 className="mx-3"><FaRegHeart /> Wishlist</h5>
                                            </div>
                                            <div className="logo-png">
                                                <h5 className="mx-3"><FaCartPlus /> Cart</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
        </>
    )
}

export default Header