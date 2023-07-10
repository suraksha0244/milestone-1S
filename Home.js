import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Home Page</h1>
            <h2>Welcome to our website!</h2>
            <p>A good education system plays a crucial role in shaping the future of individuals and societies. It focuses not only on imparting knowledge but also on developing critical thinking, creativity, and problem-solving skills. A well-designed curriculum encourages holistic development, encompassing academic, social, and emotional growth. Moreover, an inclusive education system ensures equal opportunities for all students, regardless of their background or abilities. Quality teachers, adequate resources, and modern teaching methods are essential components of a good education system, fostering a love for learning and preparing students for success in the rapidly evolving world</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* Content for the left column */}
          </div>
          <div className="col-md-6">
            {/* Content for the right column */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;