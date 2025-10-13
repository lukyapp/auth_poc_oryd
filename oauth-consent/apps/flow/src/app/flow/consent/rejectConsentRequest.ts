import { getOAuth2ApiFetchClient } from '@ory/sdk/server';

export const rejectConsentRequest = async (challenge: string) => {
  const hydra = await getOAuth2ApiFetchClient();
  const response = await hydra
    .rejectOAuth2ConsentRequest({
      consentChallenge: challenge,
    })
    .catch((error: unknown) => {
      console.log('Something unexpected went wrong.');
      console.log('error : ', error);
    });

  const redirectTo = response?.redirect_to ?? '/';
  return { redirectTo };
};
