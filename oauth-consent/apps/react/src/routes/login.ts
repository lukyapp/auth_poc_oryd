import { createRoute } from '@tanstack/react-router';
import { Login } from '../pages/login/Login';
import { authLayout } from './layout/auth.layout';

export const loginRoute = createRoute({
  getParentRoute: () => authLayout,
  path: '/login',
  component: Login,
});
