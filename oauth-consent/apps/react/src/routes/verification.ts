import { createRoute } from '@tanstack/react-router';
import { Verification } from '../pages/Verification';
import { rootRoute } from './__root';

export const verificationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/verification',
  component: Verification,
});
