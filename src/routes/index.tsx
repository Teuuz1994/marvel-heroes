import React from 'react';

import { AppRoute } from './AppRoute';
import { AuthRoute } from './AuthRoute';

import { useAuth } from '../hooks/Fakeauth';

export const Routes = () => {
  const { user } = useAuth();

  return user ? <AppRoute /> : <AuthRoute />;
};
