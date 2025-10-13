import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { acceptConsentRequest } from '../../../flow/consent/acceptConsentRequest';
import { rejectConsentRequest } from '../../../flow/consent/rejectConsentRequest';

type Scope = 'openid' | 'email' | 'profile' | 'offline';

type WithCsrfToken = {
  csrf_token: string;
};

type BaseConsentBody = WithCsrfToken & {
  grant_scope: Scope[];
  remember: boolean;
  consent_challenge: string;
};

type AcceptConsentBody = BaseConsentBody & {
  action: 'accept';
};

type RejectConsentBody = BaseConsentBody & {
  action: 'reject';
};

type ConsentBody = AcceptConsentBody | RejectConsentBody;

const getBody = async <T>(req: Request) => {
  const contentType = req.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const data = await req.json();
    return data as T;
  }
  if (
    contentType.includes('application/x-www-form-urlencoded') ||
    contentType.includes('multipart/form-data')
  ) {
    const form = await req.formData();
    const data = Object.fromEntries(form.entries());
    return data as T;
  }
  throw new Error(`Unsupported content type: ${contentType}`);
};

async function checkCsrfToken(body: WithCsrfToken) {
  const cookieStore = await cookies();
  const csrfToken = cookieStore.get('csrf_token')?.value;

  if (!csrfToken || body.csrf_token !== csrfToken) {
    throw new Error('Invalid CSRF token');
    // return NextResponse.json({error: "Invalid CSRF token"}, {status: 403})
  }
}

export async function POST(req: Request) {
  // TODO validate body
  const body = await getBody<ConsentBody>(req);
  await checkCsrfToken(body);

  if (body.action === 'accept') {
    const { redirectTo } = await acceptConsentRequest(
      body.consent_challenge,
      body.grant_scope,
      body.remember,
    );
    return NextResponse.redirect(redirectTo);
  }
  if (body.action === 'reject') {
    const { redirectTo } = await rejectConsentRequest(body.consent_challenge);
    return NextResponse.redirect(redirectTo);
  }
  return NextResponse.redirect('/');
}
