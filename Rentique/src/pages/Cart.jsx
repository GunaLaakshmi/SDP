import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { addCart, delCart } from "../redux/action";
import "./Cart.css"; // Import the CSS file

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  // Function to handle empty cart display
  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // Function to add item to cart
  const addItem = (product) => {
    dispatch(addCart(product));
  };

  // Function to remove item from cart
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  // Function to display cart with items
  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    // Calculate subtotal and total items
    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Item List</h5>
                </div>
                <div className="card-body">
                  {state.map((item) => (
                    <div key={item.id}>
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-3 col-md-12">
                          <div className="bg-image rounded" data-mdb-ripple-color="light">
                            <img
                              src={item.image}
                              alt={item.title}
                              width={100}
                              height={75}
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <p><strong>{item.title}</strong></p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                            <button className="btn px-3" onClick={() => removeItem(item)}>
                              <i className="fas fa-minus"></i>
                            </button>
                            <p className="mx-5">{item.qty}</p>
                            <button className="btn px-3" onClick={() => addItem(item)}>
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                          <p className="text-start text-md-center">
                            <strong>
                              <span className="text-muted">{item.qty}</span> x ${item.price}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems}) <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div><strong>Total amount</strong></div>
                      <span><strong>${Math.round(subtotal + shipping)}</strong></span>
                    </li>
                  </ul>
                  <Link to="/checkout" className="btn btn-dark btn-lg btn-block">
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="cart-background">
        <div className="container my-3 py-3 cart-content">
          <h1 className="text-center">Cart</h1>
          <hr />
          {state.length > 0 ? <ShowCart /> : <EmptyCart />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;