import { FlowType } from '@ory/client-fetch';
import { createUseFlowFactory } from './create-use-flow-factory';
import { clientSideFrontendClient } from './utils';

export const useRegistrationFlow = createUseFlowFactory(
  FlowType.Registration,
  (params: URLSearchParams) => {
    return clientSideFrontendClient().createBrowserRegistrationFlowRaw({
      returnTo: params.get('return_to') ?? undefined,
      loginChallenge: params.get('registration_challenge') ?? undefined,
      afterVerificationReturnTo:
        params.get('after_verification_return_to') ?? undefined,
      organization: params.get('organization') ?? undefined,
    });
  },
  (id) => clientSideFrontendClient().getRegistrationFlowRaw({ id }),
);
