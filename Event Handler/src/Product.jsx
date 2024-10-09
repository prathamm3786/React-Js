import React from 'react';
import { Item } from './Data';
import './Style.css';

const Product = ({ product, filterProduct, AddtoCart, cart }) => {
  return (
    <div className="">
      {Item.map((cat) => (
        <button onClick={() => filterProduct(cat.category)} key={cat.id} className="btn fw-bold bg-green mx-2 mt-3" style={{width:100}}>
          {cat.category}
        </button>
      ))}
      <button onClick={() => filterProduct("All")} className="btn fw-bold bg-green mx-2 mt-3" style={{width:100}}>
        All
      </button>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-9">
            <div className="row">
              {product.map((p) => (
                <div key={p.id} className="col-lg-4 p-2 mb-1">
                  <div className="product">
                    <div className="main-card position-relative overflow-hidden">
                      <div
                        className="card-img rounded-4 overflow-hidden position-relative"
                        style={{ height: 400 }}
                      >
                        <img
                          src={p.image}
                          className="img-1"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                        <img
                          src={p.image2}
                          className="img-2 position-absolute"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                      </div>
                      <div className="card-options position-absolute">
                        <ul className="list-inline">
                          <li className="pb-3">
                            <a
                              href="#"
                              className="text-black p-2 bg-white rounded-pill"
                            >
                              <i className="fa-regular fa-heart" />
                            </a>
                          </li>
                          <li className="">
                            <a
                              href="#"
                              className="text-black p-2 bg-white rounded-pill"
                            >
                              <i className="fa-solid fa-code-compare" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-shop position-absolute">
                        <ul className="list-inline d-flex justify-content-between">
                        <li className=""><button className="px-3 py-2 border-0 rounded-pill bg-white text-uppercase instrument fs-16 fw-medium">Quick view</button></li>
                          <li className="">
                            
                            <button
                              className="px-3 py-2 border-0 rounded-pill bg-white text-uppercase instrument fs-16 fw-medium"
                              onClick={() => AddtoCart(p.id)}
                            >

                              Add to cart
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-content pt-1">
                      <ul className="list-inline">
                        <li className="">
                          <a
                            href="#"
                            className="text-capitalize instrument fs-20 fw-medium"
                          >
                            {p.name}
                          </a>
                        </li>
                        <li>
                          <span className="instrument fs-20 fw-bold pe-3">
                            {p.price}
                          </span>
                          <span
                            className="instrument fs-16 fw-medium py-3 pe-3 text-black-50"
                            style={{ textDecoration: "line-through" }}
                          >
                            {p.mrp}
                          </span>
                          <span
                            style={{ backgroundColor: "#d2ef9a" }}
                            className="px-3 py-1 instrument fs-16 rounded-pill fw-bold"
                          >
                            {p.discount}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;