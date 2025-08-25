import {
  Configuration,
  FrontendApi,
  IdentityApi,
  OAuth2Api,
} from '@ory/client-fetch';

console.log('process.env', import.meta.env);
const process = import.meta;

const baseUrlInternal =
  process.env.VITE_ORY_SDK_URL || 'https://playground.projects.oryapis.com';

export const apiBaseFrontendUrlInternal =
  process.env.VITE_KRATOS_PUBLIC_URL || baseUrlInternal;

const apiBaseOauth2UrlInternal =
  process.env.VITE_HYDRA_ADMIN_URL || baseUrlInternal;

const apiBaseIdentityUrl = process.env.VITE_KRATOS_ADMIN_URL || baseUrlInternal;

export const apiBaseUrl =
  process.env.VITE_KRATOS_BROWSER_URL || apiBaseFrontendUrlInternal;

export const sdk = {
  basePath: apiBaseFrontendUrlInternal,
  frontend: new FrontendApi(
    new Configuration({
      basePath: apiBaseFrontendUrlInternal,
      credentials: 'include',
    }),
  ),
  oauth2: new OAuth2Api(
    new Configuration({
      basePath: apiBaseOauth2UrlInternal,
      ...(process.env.VITE_ORY_ADMIN_API_TOKEN && {
        accessToken: process.env.VITE_ORY_ADMIN_API_TOKEN,
      }),
      ...(process.env.VITE_MOCK_TLS_TERMINATION && {
        baseOptions: {
          'X-Forwarded-Proto': 'https',
        },
      }),
    }),
  ),
  identity: new IdentityApi(
    new Configuration({
      basePath: apiBaseIdentityUrl,
      ...(process.env.VITE_ORY_ADMIN_API_TOKEN && {
        accessToken: process.env.VITE_ORY_ADMIN_API_TOKEN,
      }),
    }),
  ),
};
