'use client';
import React from 'react';
import { UserContext } from '../../hooks/userContext';

export const UserProvider = ({ children, userData }: any) => {
  return <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};
