export const getBaseUrl = () => {
  if (isClient()) {
    return '';
  }
  const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  if (!NEXT_PUBLIC_BASE_URL) {
    throw new Error('please set NEXT_PUBLIC_SITE_URL in the env');
  }
  return NEXT_PUBLIC_BASE_URL;
};

export function isServer() {
  return typeof window === 'undefined';
}

export function isClient() {
  return !isServer();
}

export function consoleLogRuntime(prefix: string) {
  const runtime = isServer() ? 'server' : 'client';
  console.log(`${prefix ? `${prefix} : ` : ''}Running on the ${runtime}!`);
}
