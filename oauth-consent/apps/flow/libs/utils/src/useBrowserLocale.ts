'use client';

import { useEffect, useState } from 'react';
import { isSupportedLocale, SupportedLocale } from '@ory/elements-react/locales';

const getBrowserLocale = async (defaultLocale: SupportedLocale = 'en') => {
  const browserLocale = navigator.language;
  const langOnly = browserLocale.split('-')[0].toLowerCase();
  if (isSupportedLocale(langOnly)) return langOnly;
  return defaultLocale;
};

export const useBrowserLocale = (defaultLocale: SupportedLocale = 'en') => {
  const [locale, setLocale] = useState<SupportedLocale>(defaultLocale);

  useEffect(() => {
    const handleBrowserLocale = async () => {
      const browserLocale = await getBrowserLocale(defaultLocale);
      setLocale(browserLocale);
    };
    handleBrowserLocale();
  }, []);

  return { locale };
};
