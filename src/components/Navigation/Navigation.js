import React from 'react';
import { PropTypes } from 'prop-types';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {/* eslint-disable jsx-a11y/click-events-have-key-events */}
        {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
        <p
          onClick={() => onRouteChange('signout')}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign out
        </p>
        {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */}
        {/* eslint-enable jsx-a11y/click-events-have-key-events */}
      </nav>
    );
  }

  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {/* eslint-disable jsx-a11y/click-events-have-key-events */}
      {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
      <p
        onClick={() => onRouteChange('signin')}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign in
      </p>
      {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */}
      {/* eslint-enable jsx-a11y/click-events-have-key-events */}

      {/* eslint-disable jsx-a11y/click-events-have-key-events */}
      {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
      <p
        onClick={() => onRouteChange('register')}
        className="f3 link dim black underline pa3 pointer"
      >
        Register
      </p>
      {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */}
      {/* eslint-enable jsx-a11y/click-events-have-key-events */}
    </nav>
  );
};

Navigation.propTypes = {
  onRouteChange: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
};

export default Navigation;
