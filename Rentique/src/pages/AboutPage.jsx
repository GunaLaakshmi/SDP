import React from 'react';
import { Footer, Navbar } from "../components";
import "./AboutPage.css"; // Import the CSS file

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-background">
        <div className="container my-3 py-3 about-content">
          <h1 className="text-center">About Us</h1>
          <hr />
          <p className="lead text-center">
            Welcome to Rentique, your ultimate destination for fashion rentals. At Rentique, we believe in making high-quality, stylish clothing accessible to everyone. Our mission is to revolutionize the way you experience fashion by offering an extensive collection of men's, women's, and kids' clothing, shoes, and accessories for every occasion. Whether it's a special event, a casual outing, or a professional engagement, RUR provides a seamless and sustainable way to enjoy a diverse wardrobe without the commitment of ownership. By promoting the principles of rent, use, and return, we contribute to a more eco-friendly and cost-effective approach to fashion. Discover the joy of wearing premium fashion pieces without the hassle, and join us in creating a more sustainable future with RUR.
          </p>

          <h2 className="text-center py-4">Our Collections</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56cskp1igfhKHAriypBNwisUQ4YYLsBWtGg&s" alt="" height={160} />
                <div className="card-body">
                  <h5 className="card-title text-center">Mens's Clothing</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://www.zakarto.com/wp-content/uploads/2019/10/10015736.jpg" alt="" height={160} />
                <div className="card-body">
                  <h5 className="card-title text-center">Women's Clothing</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-lavender-stonework-net-designer-gown-gnrm0034431_lavender_1_4_large.jpg?v=1713960788" alt="" height={160} />
                <div className="card-body">
                  <h5 className="card-title text-center">Party Wears</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img className="card-img-top img-fluid" src="https://i.pinimg.com/736x/af/4f/19/af4f199c5af81b5062cf407e666b338f.jpg" alt="" height={160} />
                <div className="card-body">
                  <h5 className="card-title text-center">Bridals</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
