/*import React, { useState } from "react";
import ImageSlider from "../components/ImageSlider"; // Adjust the path as necessary
import './Home.css'; // Ensure you create and import this CSS file

const Home = () => {
  const [rentalDate, setRentalDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
    <div className="hero border-1 pb-3">
      <div className="card bg-dark text-white border-0 mx-3">
        <div className="card-img img-fluid">
          <ImageSlider />
        </div>
        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center text-center">
          <div className="container mt-3">
            <h5 className="card-title main-text">
              Welcome to Rentique
            </h5>
            <div className="date-container mt-4">
              <div className="date-inputs d-flex flex-column flex-md-row align-items-center justify-content-center">
                <label className="date-label mx-2">
                  Rental Date:
                  <input
                    type="date"
                    value={rentalDate}
                    onChange={(e) => setRentalDate(e.target.value)}
                    className="date-input form-control"
                  />
                </label>
                <label className="date-label mx-2 mt-3 mt-md-0">
                  Return Date:
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="date-input form-control"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-image-container text-center mt-4">
        <br></br>
        <br></br>
        <h3><center>How Rentique works</center></h3>
        <br></br>
        <br></br>
        <img src={`${process.env.PUBLIC_URL}/assets/aft_home.jpg`} alt="Steps to Rent" className="img-fluid" />
      </div>
      <div className="image-hover-container">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/cont1.jpg`} alt="Groomsmen" className="hover-image" />
          <div className="overlay">
            <div className="text">Groomsmen</div>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/assets/cont2.jpg`} alt="Bridesmaids" className="hover-image" />
          <div className="overlay">
            <div className="text">Bridesmaids</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
*/
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ImageSlider from "../components/ImageSlider"; // Adjust the path as necessary
import './Home.css'; // Ensure you create and import this CSS file

const Home = () => {
  const [rentalDate, setRentalDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
    <div className="hero border-1 pb-3">
      <div className="card bg-dark text-white border-0 mx-3">
        <div className="card-img img-fluid">
          <ImageSlider />
        </div>
        <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center text-center">
          <div className="container mt-3">
            <h5 className="card-title main-text">
              Welcome to Rentique
            </h5>
            <div className="date-container mt-4">
              <div className="date-inputs d-flex flex-column flex-md-row align-items-center justify-content-center">
                <label className="date-label mx-2">
                  Rental Date:
                  <input
                    type="date"
                    value={rentalDate}
                    onChange={(e) => setRentalDate(e.target.value)}
                    className="date-input form-control"
                  />
                </label>
                <label className="date-label mx-2 mt-3 mt-md-0">
                  Return Date:
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="date-input form-control"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-image-container text-center mt-4">
        <br />
        <br />
        <h3><center>How Rentique works</center></h3>
        <br />
        <br />
        <img src={`${process.env.PUBLIC_URL}/assets/aft_home.jpg`} alt="Steps to Rent" className="img-fluid" />
      </div>
      <div className="image-hover-container">
        <div className="image-wrapper">
          <Link to="/product"> {/* Link to Groomsmen products */}
            <img src={`${process.env.PUBLIC_URL}/assets/cont1.jpg`} alt="Groomsmen" className="hover-image" />
            <div className="overlay">
              <div className="text">Groomsmen</div>
            </div>
          </Link>
        </div>
        <div className="image-wrapper">
          <Link to="/product"> {/* Link to Bridesmaids products */}
            <img src={`${process.env.PUBLIC_URL}/assets/cont2.jpg`} alt="Bridesmaids" className="hover-image" />
            <div className="overlay">
              <div className="text">Bridesmaids</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;


