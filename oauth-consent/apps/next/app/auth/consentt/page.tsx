'use server';

import { ConsentUi } from '@/components/consent-ui';
import { getOAuth2Api } from '@/ory/sdk/server';
import { type OAuth2ConsentRequest } from '@ory/client';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'sonner';

export default async function ConsentPage(props: {
  searchParams: Promise<{ consent_challenge: string }>;
}) {
  const searchParams = await props.searchParams;
  const consentChallenge = searchParams.consent_challenge ?? undefined;
  if (!consentChallenge) {
    return;
  }

  const onAccept = async (challenge: string, scopes: string[], remember: boolean) => {
    'use server';

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
      .catch((_) => {
        toast.error('Something unexpected went wrong.');
      });

    if (!response) {
      return redirect('/');
    }

    return redirect(response.redirect_to);
  };

  let consentRequest: OAuth2ConsentRequest | undefined = undefined;
  const hydra = await getOAuth2Api();
  await hydra.getOAuth2ConsentRequest({ consentChallenge }).then(({ data }) => {
    if (data.skip) {
      onAccept(consentChallenge, data.requested_scope!, false);
      return;
    }
    consentRequest = data;
  });

  if (!consentRequest) {
    return;
  }

  return <ConsentUi consentRequest={consentRequest} />;
}
