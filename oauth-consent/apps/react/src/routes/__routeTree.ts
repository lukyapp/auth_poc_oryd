import { rootRoute } from './__root';
import { authLayout } from './layout/auth.layout';
import { loginRoute } from './login';
import { recoveryRoute } from './recovery';
import { registrationRoute } from './registration';
import { settingsRoute } from './settings';
import { verificationRoute } from './verification';

export const routeTree = rootRoute.addChildren([
  authLayout.addChildren([loginRoute]),
  registrationRoute,
  recoveryRoute,
  settingsRoute,
  verificationRoute,
]);
