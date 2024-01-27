'use client';
import { UserContext } from '@/app/hooks/userContext';
import React, { useContext } from 'react';

const LoggedInUser = () => {
  const userData = useContext(UserContext) as any;

  console.log(userData.userName, 'userData to LoggedInUser');
  return (
    <>
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginRight: '8px',
        }}
      >
        <img
          src={userData?.photoUrl}
          alt="Photo"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div>{userData.userName}</div>
    </>
  );
};

export default LoggedInUser;
