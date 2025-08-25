import type { OAuth2LogoutRequest } from '@ory/client-fetch';
import { apiBaseUrl, sdk } from './sdk';

const process = import.meta;
console.log('apiBaseUrl', apiBaseUrl);

type Challenge = {
  skip: boolean;
  client: OAuth2LogoutRequest & {
    skip_consent: boolean;
    client_id: string;
    skip_logout_consent: boolean;
  };
};

export const createHelpers = () => {
  return {
    apiBaseUrl: apiBaseUrl,
    kratosBrowserUrl: apiBaseUrl,
    faviconUrl: 'favico.png',
    faviconType: 'image/png',
    isOAuthConsentRouteEnabled: () =>
      (process.env.VITE_HYDRA_ADMIN_URL || process.env.VITE_ORY_SDK_URL) &&
      process.env.VITE_CSRF_COOKIE_SECRET &&
      process.env.VITE_CSRF_COOKIE_NAME
        ? true
        : false,
    shouldSkipConsent: (challenge: Challenge) => {
      let trustedClients: string[] = [];
      if (process.env.VITE_TRUSTED_CLIENT_IDS) {
        trustedClients = String(process.env.VITE_TRUSTED_CLIENT_IDS).split(',');
      }
      return challenge.skip ||
        challenge.client?.skip_consent ||
        (challenge.client?.client_id &&
          trustedClients.indexOf(challenge.client?.client_id) > -1)
        ? true
        : false;
    },
    shouldSkipLogoutConsent: (challenge: Challenge) => {
      return Boolean(
        (
          challenge.client as OAuth2LogoutRequest & {
            skip_logout_consent: boolean;
          }
        )?.skip_logout_consent,
      );
    },
    ...sdk,
    logoUrl: undefined,
    extraPartials: undefined,
  };
};
