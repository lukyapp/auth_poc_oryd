import React from 'react';
import { redirect } from 'next/navigation';

import { acceptConsentRequest } from './acceptConsentRequest';
import { ConsentUi } from './consent-ui';
import { getConsentRequest } from './getConsentRequest';

export default async function ConsentPage(props: {
  searchParams: Promise<{ consent_challenge: string }>;
}) {
  const searchParams = await props.searchParams;
  const consentChallenge = searchParams.consent_challenge ?? undefined;
  if (!consentChallenge) {
    return;
  }
  const consentRequest = await getConsentRequest(consentChallenge);
  const skipConsent = consentRequest.client?.skip_consent ?? consentRequest.skip;
  if (skipConsent) {
    const { redirectTo } = await acceptConsentRequest(
      consentChallenge,
      consentRequest.requested_scope!,
      false,
    );
    redirect(redirectTo);
  }
  return <ConsentUi consentRequest={consentRequest} />;
}
