import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/style.css"
import "../assets/css/fonts.css"


function CustomNavbar() {
  return (
    <div className='poppins'>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container pb-3 border-bottom">
          <a className="navbar-brand" href="#">
            <img src="./src/assets/img/logo.png" alt="Carrot logo" width="115" height="35" />

          </a>
          <form className="d-flex search-bar border rounded-2 primary-border overflow-hidden">
            <input className="form-control focus-form border-0 fs-13 poppins" type="search" placeholder="Search For items..." aria-label="Search" />
            <select className="border-start focus-form border-0 primary-border px-4 fs-14 secondary-color">
              <option selected className='fs-14 focus-form'>All Categories</option>
              <option value="1" className='fs-14'>Mens</option>
              <option value="2" className='fs-14'>Womens</option>
              <option value="3" className='fs-14'>Electronics</option>
            </select>
            <button className="border-0 primary-bg text-white p-2 px-3" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="d-flex">
            <a className="color-hover nav-link pe-4 fs-15 position-relative" href="#"><i className="fas fa-user"></i> Account
              <div className="dropdown-d bg-white shadow rounded-2 px-4 py-2" >
                <ul className=' list-inline text-start'>
                  <li className='pb-2'><a class="fs-13 secondary-color color-hover">Checkout</a></li>
                  <li className='pb-2'><a class="fs-13 secondary-color color-hover">Register</a></li>
                  <li ><a class="fs-13 secondary-color color-hover">Login</a></li>
                </ul>
              </div>
            </a>
            <a className="color-hover nav-link pe-4 fs-15 " href="#"><i className="fas fa-heart"></i> Wishlist</a>
            <a className="color-hover nav-link fs-15" href="#"><i className="fas fa-shopping-cart "></i> Cart</a>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <div className="row row-cols-3 align-items-center ">
            <div className="more-btn position-relative">
              <span className='border secondary-border rounded-2 p-1 color-hover  fs-20'><i class="fa-solid fa-bars-staggered"></i></span><div className="dropdown-d bg-white shadow rounded-2 px-4 py-2" style={{ width: 600 }} >
                <div className="row row-cols-3">
                  <div className="first-list">
                    <ul className='list-inline'>
                      <li className='border primary-border fs-13 rounded-2 px-3 mb-2 py-2 fw-bold primary-color color-hover'>Dairy & Bakery</li>
                      <li className='border primary-border fs-13 rounded-2 px-3 mb-2 py-2 fw-bold third-color color-hover'>Fruits & Vegetable</li>
                      <li className='border primary-border fs-13 rounded-2 px-3 mb-2 py-2 fw-bold third-color color-hover'>Snack & Spice</li>
                      <li className='border primary-border fs-13 rounded-2 px-3 mb-2 py-2 fw-bold third-color color-hover'>Juice & Drinks</li>
                      <li className='border primary-border fs-13 rounded-2 px-3 mb-2 py-2 fw-bold third-color color-hover'>View All</li>
                    </ul>
                  </div>
                  <div className="first-list">
                    <ul className='list-inline'>
                      <li className=' fs-15 border-bottom px-3  py-2 fw-bold primary-color color-hover'>Dairy</li>
                      <li className=' fs-13 px-3  py-2 fw-normal secondary-color color-hover'>Milk</li>
                      <li className=' fs-13 px-3  py-2 fw-normal secondary-color color-hover'>Ice cream</li>
                      <li className=' fs-13 px-3  py-2 fw-normal secondary-color color-hover'>Cheese</li>
                      <li className=' fs-13 px-3  py-2 fw-normal secondary-color color-hover'>Frozen custard</li>
                      <li className=' fs-13 px-3  py-2 fw-normal secondary-color color-hover'>Frozen yogurt</li>
                    </ul>
                  </div>
                  <div className="first-list">
                    <ul className='list-inline'>
                      <li className=' fs-15 border-bottom px-3  py-2 fw-bold primary-color color-hover'>Bakery</li>
                      <li className=' fs-13 px-3  py-2 fw-normal secondary-color color-hover'>Cake and Pastry</li>
                      <li className=' fs-13 px-3  py-2 fw-normal secondary-color color-hover'>Rusk Toast</li>
                      <li className=' fs-13 px-3  py-2 fw-normal secondary-color color-hover'>Bread & Buns</li>
                      <li className=' fs-13 px-3  py-2 fw-normal secondary-color color-hover'>Chocolate Brownie</li>
                      <li className=' fs-13 px-3  py-2 fw-normal secondary-color color-hover'>Cream Roll</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-menu">
              <ul className='list-inline d-flex'>
                <li className=' underline-hover position-relative fs-14 fw-500 text-capitalize pe-5 d-flex align-items-center'><span>home</span></li>
                <li className='underline-hover position-relative fs-14 fw-500 text-capitalize pe-5 d-flex align-items-center' ><span className='pe-2'>category</span><i class="fa-solid fa-chevron-down "></i>
                  <div className="dropdown-d bg-white shadow rounded-2 px-4 py-2" style={{width:180}}>
                    <ul className=' list-inline text-start'>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Shop Left sidebar</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Shop Right sidebar</a></li>
                      <li ><a class="fs-13 secondary-color color-hover">Full Width</a></li>
                    </ul>
                  </div>
                </li>
                <li className=' underline-hover position-relative fs-14 fw-500 text-capitalize pe-5 d-flex align-items-center'><span className='pe-2'>product</span><i class="fa-solid fa-chevron-down"></i>
                  <div className="dropdown-d bg-white shadow rounded-2 px-4 py-2"  style={{width:180}}>
                    <ul className=' list-inline text-start'>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover ">Product Left sidebar</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Product Right sidebar</a></li>
                      <li ><a class="fs-13 secondary-color color-hover">Product Full Width</a></li>
                    </ul>
                  </div>
                </li>
                <li className=' underline-hover position-relative fs-14 fw-500 text-capitalize pe-5 d-flex align-items-center'><span className='pe-2'>pages</span><i class="fa-solid fa-chevron-down"></i>
                  <div className="dropdown-d bg-white shadow rounded-2 px-4 py-2"  style={{width:180}}>
                    <ul className=' list-inline text-start'>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">About Us</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Contact Us</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Cart</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Checkout</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Track Order</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Wishlist</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Faq</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Login</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Register</a></li>
                      <li ><a class="fs-13 secondary-color color-hover">Policy</a></li>
                    </ul>
                  </div>
                </li>
                <li className=' underline-hover position-relative fs-14 fw-500 text-capitalize pe-5 d-flex align-items-center'><span className='pe-2'>blog</span><i class="fa-solid fa-chevron-down"></i>
                  <div className="dropdown-d bg-white shadow rounded-2 px-4 py-2"  style={{width:180}}>
                    <ul className=' list-inline text-start'>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Left Sidebar</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Right Sidebar</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Full Width</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Detail Left Sidebar</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Detail Right Sidebar</a></li>
                      <li ><a class="fs-13 secondary-color color-hover">Detail Full Width</a></li>
                    </ul>
                  </div></li>
                <li className=' underline-hover position-relative fs-14 fw-500 text-capitalize pe-5 d-flex align-items-center'><span className='pe-2'>elements</span><i class="fa-solid fa-chevron-down"></i>
                  <div className="dropdown-d bg-white shadow rounded-2 px-4 py-2"  style={{width:180}}>
                    <ul className=' list-inline text-start'>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Product</a></li>
                      <li className='pb-2'><a class="fs-13 secondary-color color-hover">Typography</a></li>
                      <li ><a class="fs-13 secondary-color color-hover">Buttons</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="justify-content-end">
            <i className="fas fa-phone"></i>
            <span>+123 ( 456 ) ( 7890 )</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CustomNavbar;


