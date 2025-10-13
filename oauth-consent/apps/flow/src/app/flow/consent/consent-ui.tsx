'use client';

import React from 'react';
import { config } from '@ory';
import { type OAuth2ConsentRequest } from '@ory/client-fetch';
import { useSession } from '@ory/elements-react/client';
import { Consent } from '@ory/elements-react/theme';

import { useCsrfToken } from './useCsrfToken';

type Props = {
  consentRequest: OAuth2ConsentRequest;
};

export const ConsentUi = ({ consentRequest }: Props) => {
  const session = useSession();
  const csrfToken = useCsrfToken();

  if (!session || !csrfToken) {
    return null;
  }

  return (
    <Consent
      config={config}
      // @ts-expect-error consent session
      session={session}
      consentChallenge={consentRequest}
      formActionUrl={'/api/consent/submit'}
      csrfToken={csrfToken}
    />
  );
};
