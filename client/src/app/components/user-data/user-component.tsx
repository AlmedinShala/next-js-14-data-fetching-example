'use client';
import { UserContext } from '@/app/hooks/userContext';
import { useContext } from 'react';

export const UserComponent = () => {
  const usersData = useContext(UserContext) as any;

  return <div>Logged in user: {usersData?.userName}</div>;
};
