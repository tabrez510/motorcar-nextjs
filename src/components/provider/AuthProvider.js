'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from '@/redux/slice/authSlice';

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const accessToken = localStorage.getItem('accessToken');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const token = parsedUser.token || accessToken;
      dispatch(logInUser({ user: parsedUser, accessToken: token }));
    }
  }, []);

  return <>{children}</>;
}
