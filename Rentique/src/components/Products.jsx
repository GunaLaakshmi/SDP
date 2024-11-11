/*import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../redux/action";

const Products = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Sherwani",
      category: "men's clothing",
      image: "https://i.pinimg.com/originals/14/c6/cc/14c6cc5e7795f33422c6189ed4d27b9a.jpg",
      price: 54.88,
      description: "royal blue nawabi sherwani",
    },
    {
      id: 2,
      title: "Wedding Lehenga",
      category: "women's clothing",
      image: "https://panachehautecouture.com/cdn/shop/products/Anarkali_gown_1.jpeg?v=1571438587",
      price: 5979.99,
      description: "Designer Bridal Lehenga red ethnic ",
    },
    {
      id: 3,
      title: "Grey Grown with net sleeves",
      category: "jewelery",
      image: "https://img.faballey.com/images/Product/ILG00149Z/4.jpg",
      price: 499.99,
      description: "Party wear with elegant look",
    },
    {
      id: 4,
      title: "Bridal Lehenga",
      category: "electronics",
      image: "https://getethnic.com/wp-content/uploads/2020/01/25.jpg",
      price: 2499.99,
      description: "Crystal Blue women marati Wedding Lehenga",
    },
    {
      id: 5,
      title: "Sherwani",
      category: "men's clothing",
      image: "https://i.pinimg.com/originals/c2/89/a1/c289a1b83c68fd2d9be527ce4c86a2a1.jpg",
      price: 57.88,
      description: "Half-white sherwani",
    },
    {
      id: 6,
      title: "Anarkali",
      category: "women's clothing",
      image: "https://empress-clothing.com/cdn/shop/files/AW9973.jpg?v=1718360425&width=1080",
      price: 2109.99,
      description: "Navy Blue Anarkali with golgen thread heavy design",
    },{
      id: 7,
      title: "Sherwani",
      category: "men's clothing",
      image: "https://i.pinimg.com/736x/c8/7b/6d/c87b6d22b18509d84bfa2db620ee83e3.jpg",
      price: 55.88,
      description: "The nawabi pink & beige sherwani with heavy embroidery ",
    },
    {
      id: 9,
      title: "Bridal Lehenga",
      category: "electronics",
      image: "https://cdn.rajwadi.com/image/cache/data-2024/silk-red-a-line-lehenga-choli-53057-800x1100.jpg",
      price: 7500.99,
      description: "Bright Pink Lehenga with heavy design",
    },{
      id: 10,
      title: "Bridal Lehenga",
      category: "electronics",
      image: "https://i0.wp.com/shaadiwish.com/blog/wp-content/uploads/2021/08/cooridnated-bridal-jewellery-sets-683x1024.jpg",
      price: 6540.99,
      description: "Heavy Bridal Lehenga",
    },
    {
      id: 11,
      title: " Pastel Green Grown with Ruffle Sleeve",
      category: "jewelery",
      image: "https://www.pure-elegance.com/cdn/shop/products/50Z402__765_Onaya24874_B-822450.jpg",
      price: 2325.99,
      description: "Part wear Grown",
    },
    {
      id: 12,
      title: "Sherwani",
      category: "men's clothing",
      image: "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/001/620/418/new_medium/the_clothing_rental_%282%29.jpg?1584508343",
      price: 54.88,
      description: "royal blue nawabi sherwani",
    },
    {
      id: 13,
      title: "Pink Gown without sleeve",
      category: "jewelery",
      image: "https://tiimg.tistatic.com/fp/1/008/243/ladies-sleeveless-long-length-cotton-gown-for-party-wear-831.jpg",
      price: 1500,
      description: "Party/Office wear Outfit",
    },
    {
      id: 14,
      title: "Bridal Lehenga",
      category: "electronics",
      image: "https://www.swathiveldandistudio.com/cdn/shop/products/Lehanga_Red_1_b03d3149-0b3e-4554-9228-41ae38f65ff5.webp?v=1706209858&width=2048",
      price: 6999.99,
      description: "Royal Red Bridal Lehenga Set",
    },
    {
      id: 15,
      title: "Yellow Party Wear",
      category: "electronics",
      image: "https://www.frontierraas.com/pub/media/catalog/product/cache/74910300c4c00f257771c5afa25168a6/f/r/fr12133953_2_.jpg",
      price: 2109.99,
      description: "Haldi Outfit with pink embroidery",
    },
    {
      id: 16,
      title: "Heavy Anarkali Set",
      category: "women's clothing",
      image: "https://www.reeshma.com/pub/media/catalog/product/cache/30b8bbcb7ad8e4f20503e2d1afca4aab/j/s/jse06.jpg",
      price: 3500.99,
      description: "Peach Anarkali with stone work ",
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
                  height={500}
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
*/

import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addCart } from "../redux/action";

const Products = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Sherwani",
      category: "men's clothing",
      image: "https://i.pinimg.com/originals/14/c6/cc/14c6cc5e7795f33422c6189ed4d27b9a.jpg",
      price: 54.88,
      description: "Royal blue nawabi sherwani",
    },
    {
      id: 2,
      title: "Wedding Lehenga",
      category: "women's clothing",
      image: "https://panachehautecouture.com/cdn/shop/products/Anarkali_gown_1.jpeg?v=1571438587",
      price: 5979.99,
      description: "Designer Bridal Lehenga red ethnic",
    },
    {
      id: 3,
      title: "Grey Gown with net sleeves",
      category: "jewelery",
      image: "https://img.faballey.com/images/Product/ILG00149Z/4.jpg",
      price: 499.99,
      description: "Party wear with elegant look",
    },
    {
      id: 4,
      title: "Bridal Lehenga",
      category: "electronics",
      image: "https://getethnic.com/wp-content/uploads/2020/01/25.jpg",
      price: 2499.99,
      description: "Crystal Blue Marati Wedding Lehenga",
    },
    {
      id: 5,
      title: "Sherwani",
      category: "men's clothing",
      image: "https://i.pinimg.com/originals/c2/89/a1/c289a1b83c68fd2d9be527ce4c86a2a1.jpg",
      price: 57.88,
      description: "Half-white sherwani",
    },
    {
      id: 6,
      title: "Anarkali",
      category: "women's clothing",
      image: "https://empress-clothing.com/cdn/shop/files/AW9973.jpg?v=1718360425&width=1080",
      price: 2109.99,
      description: "Navy Blue Anarkali with golden thread heavy design",
    },
    {
      id: 7,
      title: "Sherwani",
      category: "men's clothing",
      image: "https://i.pinimg.com/736x/c8/7b/6d/c87b6d22b18509d84bfa2db620ee83e3.jpg",
      price: 55.88,
      description: "Nawabi pink & beige sherwani with heavy embroidery",
    },
    {
      id: 8,
      title: "Bridal Lehenga",
      category: "electronics",
      image: "https://cdn.rajwadi.com/image/cache/data-2024/silk-red-a-line-lehenga-choli-53057-800x1100.jpg",
      price: 7500.99,
      description: "Bright Pink Lehenga with heavy design",
    },
    {
      id: 9,
      title: "Bridal Lehenga",
      category: "electronics",
      image: "https://i0.wp.com/shaadiwish.com/blog/wp-content/uploads/2021/08/cooridnated-bridal-jewellery-sets-683x1024.jpg",
      price: 6540.99,
      description: "Heavy Bridal Lehenga",
    },
    {
      id: 10,
      title: "Pastel Green Gown with Ruffle Sleeve",
      category: "jewelery",
      image: "https://www.pure-elegance.com/cdn/shop/products/50Z402__765_Onaya24874_B-822450.jpg",
      price: 2325.99,
      description: "Party wear Gown",
    },
    {
      id: 11,
      title: "Sherwani",
      category: "men's clothing",
      image: "https://images.shaadisaga.com/shaadisaga_production/photos/pictures/001/620/418/new_medium/the_clothing_rental_%282%29.jpg?1584508343",
      price: 54.88,
      description: "Royal blue nawabi sherwani",
    },
    {
      id: 12,
      title: "Pink Gown without sleeve",
      category: "jewelery",
      image: "https://tiimg.tistatic.com/fp/1/008/243/ladies-sleeveless-long-length-cotton-gown-for-party-wear-831.jpg",
      price: 1500,
      description: "Party/Office wear outfit",
    },
    {
      id: 13,
      title: "Bridal Lehenga",
      category: "electronics",
      image: "https://www.swathiveldandistudio.com/cdn/shop/products/Lehanga_Red_1_b03d3149-0b3e-4554-9228-41ae38f65ff5.webp?v=1706209858&width=2048",
      price: 6999.99,
      description: "Royal Red Bridal Lehenga Set",
    },
    {
      id: 14,
      title: "Yellow Party Wear",
      category: "electronics",
      image: "https://www.frontierraas.com/pub/media/catalog/product/cache/74910300c4c00f257771c5afa25168a6/f/r/fr12133953_2_.jpg",
      price: 2109.99,
      description: "Haldi Outfit with pink embroidery",
    },
    {
      id: 15,
      title: "Heavy Anarkali Set",
      category: "women's clothing",
      image: "https://www.reeshma.com/pub/media/catalog/product/cache/30b8bbcb7ad8e4f20503e2d1afca4aab/j/s/jse06.jpg",
      price: 3500.99,
      description: "Peach Anarkali with stone work",
    },
  ]);

  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    if (category) {
      filterProduct(category);
    }
  }, [location]);

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
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt={product.title}
                  height={500}
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
                  <Link to={`/products/${product.id}`} className="btn btn-dark btn-sm m-2">
                    View Details
                  </Link>
                  <button
                    className="btn btn-dark btn-sm m-2"
                    onClick={() => addProduct(product)}
                  >
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
  );
};

export default Products;
