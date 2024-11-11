import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../redux/action";

const Products = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Product 1",
      category: "men's clothing",
      image: "https://i.pinimg.com/originals/3a/8d/75/3a8d752cdc53eea9967bace1b00a2579.jpg",
      price: 3999.99,
      description: "This is a description for product 1",
    },
    {
      id: 2,
      title: "Product 2",
      category: "women's clothing",
      image: "https://i.pinimg.com/originals/46/0c/42/460c42af5b036016009002d95dccc23f.jpg",
      price: 5979.99,
      description: "This is a description for product 2",
    },
    {
      id: 3,
      title: "Product 3",
      category: "jewelery",
      image: "https://tiimg.tistatic.com/fp/1/008/243/ladies-sleeveless-long-length-cotton-gown-for-party-wear-831.jpg",
      price: 4199.99,
      description: "This is a description for product 3",
    },
    {
      id: 4,
      title: "Product 4",
      category: "electronics",
      image: "https://www.swathiveldandistudio.com/cdn/shop/products/Lehanga_Red_1_b03d3149-0b3e-4554-9228-41ae38f65ff5.webp?v=1706209858&width=2048",
      price: 2499.99,
      description: "This is a description for product 4",
    },
    {
      id: 5,
      title: "Product 5",
      category: "men's clothing",
      image: "https://i.pinimg.com/originals/e2/c8/bd/e2c8bd63bfd937756b0c3d23feeb14fb.jpg",
      price: 5289.99,
      description: "This is a description for product 5",
    },
    {
      id: 6,
      title: "Product 6",
      category: "women's clothing",
      image: "https://i.pinimg.com/736x/c8/7b/6d/c87b6d22b18509d84bfa2db620ee83e3.jpg",
      price: 2109.99,
      description: "This is a description for product 6",
    },
  ]);

  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={75} width={400} />
        </div>
        {[...Array(6)].map((_, index) => (
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={index}>
            <Skeleton height={400} />
          </div>
        ))}
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
            All
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>
            Mens
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
            Womens
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>
            Party
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>
            Bridals
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt={product.title}
                  height={600}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}/Day</li>
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
