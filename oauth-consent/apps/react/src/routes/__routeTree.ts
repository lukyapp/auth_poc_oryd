import { rootRoute } from './__root';
import { consentRoute } from './consent';
import { deviceDoneRoute } from './devise-done';
import { deviceVerificationRoute } from './devise-verification';
import { errorRoute } from './error';
import { loginRoute } from './login';
import { logoutRoute } from './logout';
import { logoutSuccessfulRoute } from './logout-successful';
import { recoveryRoute } from './recovery';
import { registrationRoute } from './registration';
import { settingsRoute } from './settings';

export const routeTree = rootRoute.addChildren([
  loginRoute,
  registrationRoute,
  consentRoute,
  logoutRoute,
  deviceVerificationRoute,
  deviceDoneRoute,
  errorRoute,
  logoutSuccessfulRoute,
  settingsRoute,
  recoveryRoute,
]);
