import { createRoute } from '@tanstack/react-router';
import { Recovery } from '../pages/Recovery';
import { rootRoute } from './__root';

export const recoveryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/recovery',
  component: Recovery,
});
