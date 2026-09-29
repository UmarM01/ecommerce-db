import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DebugPanel = ({ currentPage, cartItemCount, error }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="position-fixed bottom-0 end-0 m-3">
      <button
        className="btn btn-dark btn-sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {isOpen ? 'Close Debug' : 'Debug'}
      </button>
      {isOpen && (
        <div className="card mt-2">
          <div className="card-header">Live Debug</div>
          <div className="card-body">
            <p className="mb-1">Page: {currentPage || 'Not set'}</p>
            <p className="mb-1">Cart items: {cartItemCount}</p>
            {error && <p className="text-danger mb-0">Error: {String(error)}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

DebugPanel.propTypes = {
  currentPage: PropTypes.string,
  cartItemCount: PropTypes.number,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

DebugPanel.defaultProps = {
  currentPage: '',
  cartItemCount: 0,
  error: null
};

export default DebugPanel;
