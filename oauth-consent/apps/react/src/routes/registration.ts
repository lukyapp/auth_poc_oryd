import { createRoute } from '@tanstack/react-router';
import { Registration } from '../pages/registration/Registration';
import { rootRoute } from './__root';

export const registrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/registration',
  component: Registration,
});
