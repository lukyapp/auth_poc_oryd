'use client';

import { generateCsrfCookie } from '@/components/csrf-server-tools';
import { useEffect, useState } from 'react';

export const useCsrfToken = () => {
  const [token, setToken] = useState<string | undefined>();
  useEffect(() => {
    generateCsrfCookie()
      .then((csrfToken) => setToken(csrfToken))
      .catch(console.log);
  }, []);
  return token;
};
