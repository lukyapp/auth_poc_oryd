import { createRoute } from '@tanstack/react-router';
import { Settings } from '../pages/Settings';
import { rootRoute } from './__root';

export const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/settings',
  component: Settings,
});
