import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ onBrowseProducts }) => {
  return (
    <div className="container py-4">
      <div className="p-4 p-md-5 bg-primary-subtle rounded-3">
        <span className="badge text-bg-primary mb-3">TechStore</span>
        <h2 className="display-6 fw-semibold">Technology for your everyday</h2>
        <p className="lead text-secondary">Browse useful devices and accessories at simple prices.</p>
        <button className="btn btn-primary" onClick={onBrowseProducts}>
          Explore Products
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  onBrowseProducts: PropTypes.func.isRequired
};

export default Home;
