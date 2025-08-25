import { createRoute } from '@tanstack/react-router';
import { AuthLayout } from '../../layouts/auth.layout';
import { rootRoute } from '../__root';

export const authLayout = createRoute({
  id: 'authLayout',
  getParentRoute: () => rootRoute,
  component: AuthLayout,
});
