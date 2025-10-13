'use server';

import { cookies } from 'next/headers';

import { consoleLogRuntime } from '@utils';

export async function generateCsrfCookie() {
  consoleLogRuntime('generateCsrfCookie');
  const csrfToken = crypto.randomUUID();
  const cookieStore = await cookies();
  cookieStore.set('csrf_token', csrfToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 30,
  });
  return csrfToken;
}
