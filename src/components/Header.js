// DAY 4: Functional Component with Props

import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ cartItemCount, onCartClick, userName, onLoginClick, isLoggedIn }) => {
  return (
    <header className="header-section bg-primary text-white">
      <div className="header-container container py-3 d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="header-logo">
          <h1 className="h3 mb-0">TechStore</h1>
          <p className="tagline mb-0">Your Tech Supermarket</p>
        </div>

        <div className="header-info d-flex align-items-center gap-2">
          <span className="user-info">Welcome, {userName || 'Guest'}</span>
          <button className="btn btn-light text-primary btn-sm" onClick={onLoginClick}>
            {isLoggedIn ? 'Sign Out' : 'Demo Sign In'}
          </button>

          <button
            className="cart-button btn btn-outline-light btn-sm"
            onClick={onCartClick}
            title="Go to cart"
          >
            ️ Cart ({cartItemCount})
          </button>
        </div>
      </div>

    </header>
  );
};

// DAY 5: Props Validation
Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
  onCartClick: PropTypes.func.isRequired,
  userName: PropTypes.string,
  onLoginClick: PropTypes.func,
  isLoggedIn: PropTypes.bool
};

Header.defaultProps = {
  cartItemCount: 0,
  userName: 'Guest',
  onLoginClick: () => {},
  isLoggedIn: false
};

export default Header;
