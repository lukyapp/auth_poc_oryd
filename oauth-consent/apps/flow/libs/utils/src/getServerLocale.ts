'use server';

import { headers } from 'next/headers';
import { isSupportedLocale, SupportedLocale } from '@ory/elements-react/locales';

export async function getServerLocale(defaultLocale: SupportedLocale = 'en') {
  const headersManager = await headers();
  const acceptLanguage = headersManager.get('accept-language');

  console.log('acceptLanguage : ', acceptLanguage);

  if (!acceptLanguage) return defaultLocale;
  const [lang] = acceptLanguage.split(',');
  const langCode = lang.split('-')[0].toLowerCase();
  return isSupportedLocale(langCode) ? langCode : defaultLocale;
}
