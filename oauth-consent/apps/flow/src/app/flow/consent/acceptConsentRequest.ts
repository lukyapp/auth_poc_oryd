import { getOAuth2ApiFetchClient } from '@ory/sdk/server';

export const acceptConsentRequest = async (
  challenge: string,
  scopes: string[],
  remember: boolean,
) => {
  const hydra = await getOAuth2ApiFetchClient();
  const response = await hydra
    .acceptOAuth2ConsentRequest({
      consentChallenge: challenge,
      acceptOAuth2ConsentRequest: {
        grant_scope: scopes,
        remember: remember,
        remember_for: 3600,
      },
    })
    .catch((error: unknown) => {
      console.log('Something unexpected went wrong.');
      console.log('error : ', error);
    });

  const redirectTo = response?.redirect_to ?? '/';
  return { redirectTo };
};
