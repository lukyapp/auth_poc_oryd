import { getOAuth2ApiFetchClient } from '@ory/sdk/server';

import { consoleLogRuntime } from '@utils';

export const getConsentRequest = async (consentChallenge: string) => {
  consoleLogRuntime('getConsentRequest');
  const hydra = await getOAuth2ApiFetchClient();
  return hydra.getOAuth2ConsentRequest({ consentChallenge });
};
