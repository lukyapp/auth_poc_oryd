import { FlowType } from '@ory/client-fetch';
import {sdk} from "../pages/utils/sdk";
import { createUseFlowFactory } from './create-use-flow-factory';

export const useRegistrationFlow = createUseFlowFactory(
  FlowType.Registration,
  (params: URLSearchParams) => {
    return sdk.frontend.createBrowserRegistrationFlowRaw({
      returnTo: params.get('return_to') ?? undefined,
      loginChallenge: params.get('registration_challenge') ?? undefined,
      afterVerificationReturnTo:
        params.get('after_verification_return_to') ?? undefined,
      organization: params.get('organization') ?? undefined,
    });
  },
  (id) => sdk.frontend.getRegistrationFlowRaw({ id }),
);
