import {
  Configuration,
  FlowType,
  FrontendApi,
  type OnRedirectHandler,
} from '@ory/client-fetch';

export const orySdkUrl = () => {
  return import.meta.env.VITE_ORY_SDK_URL as string;
};

export function onValidationError<T>(value: T): T {
  return value;
}

export const toBrowserEndpointRedirect = (
  params: URLSearchParams,
  flowType: FlowType,
) =>
  orySdkUrl() +
  '/self-service/' +
  flowType.toString() +
  '/browser?' +
  new URLSearchParams(params).toString();

export const handleRestartFlow =
  (searchParams: URLSearchParams, flowType: FlowType) => () => {
    window.location.assign(toBrowserEndpointRedirect(searchParams, flowType));
  };

export function useOnRedirect(): OnRedirectHandler {
  // const router = useRouter()
  return (url: string, external: boolean) => {
    if (external) {
      window.location.assign(url);
    } else {
      // void router.push(url)
    }
  };
}

export function rewriteJsonResponse<T extends object>(
  obj: T,
  proxyUrl?: string,
): T {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          // Recursively process each item in the array
          return [
            key,
            value
              .map((item) => {
                if (typeof item === 'object' && item !== null) {
                  return rewriteJsonResponse(item, proxyUrl);
                } else if (typeof item === 'string' && proxyUrl) {
                  return item.replaceAll(orySdkUrl(), proxyUrl);
                }
                return item;
              })
              .filter((item) => item !== undefined),
          ];
        } else if (typeof value === 'object' && value !== null) {
          // Recursively remove undefined in nested objects
          return [key, rewriteJsonResponse(value, proxyUrl)];
        } else if (typeof value === 'string' && proxyUrl) {
          // Replace SDK URL with the provided proxy URL
          return [key, value.replaceAll(orySdkUrl(), proxyUrl)];
        }
        return [key, value];
      }),
  ) as T;
}

export const clientSideFrontendClient = () =>
  new FrontendApi(
    new Configuration({
      headers: {
        Accept: 'application/json',
      },
      credentials: 'include',
      basePath: orySdkUrl(),
    }),
  );
