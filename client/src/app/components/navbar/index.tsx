import React from 'react';
import LoggedInUser from './logged-in-user';

const Navbar = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '60px',
        backgroundColor: 'gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <LoggedInUser />
    </div>
  );
};

export default Navbar;
