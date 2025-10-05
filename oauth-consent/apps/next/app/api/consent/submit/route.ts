import { getOAuth2Api } from '@/ory/sdk/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

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

const getBody = async (req: Request) => {
  const contentType = req.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const data = await req.json();
    return data;
  }
  if (
    contentType.includes('application/x-www-form-urlencoded') ||
    contentType.includes('multipart/form-data')
  ) {
    const form = await req.formData();
    const data = Object.fromEntries(form.entries());
    return data;
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
  const body: ConsentBody = await getBody(req);
  checkCsrfToken(body);

  const onAccept = async (challenge: string, scopes: Scope[], remember: boolean) => {
    const hydra = await getOAuth2Api();
    const response = await hydra
      .acceptOAuth2ConsentRequest({
        consentChallenge: challenge,
        acceptOAuth2ConsentRequest: {
          grant_scope: scopes,
          remember: remember,
          remember_for: 3600,
        },
      })
      .then(({ data }) => data)
      .catch((error: unknown) => {
        console.log('Something unexpected went wrong.');
        console.log('error : ', error);
      });

    const redirectTo = response?.redirect_to ?? '/';
    return { redirectTo };
  };

  const onReject = async (challenge: string) => {
    const hydra = await getOAuth2Api();
    const response = await hydra
      .rejectOAuth2ConsentRequest({
        consentChallenge: challenge,
      })
      .then(({ data }) => data)
      .catch((error: unknown) => {
        console.log('Something unexpected went wrong.');
        console.log('error : ', error);
      });

    const redirectTo = response?.redirect_to ?? '/';
    return { redirectTo };
  };

  if (body.action === 'accept') {
    const { redirectTo } = await onAccept(body.consent_challenge, body.grant_scope, body.remember);
    return NextResponse.redirect(redirectTo);
  }
  if (body.action === 'reject') {
    const { redirectTo } = await onReject(body.consent_challenge);
    return NextResponse.redirect(redirectTo);
  }
  return NextResponse.redirect('/');
}
