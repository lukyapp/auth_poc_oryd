import { createRoute } from '@tanstack/react-router';
import { RegistrationPage } from '../pages/registration.page';
import { rootRoute } from './__root';

export const registrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/registration',
  component: RegistrationPage,
});
