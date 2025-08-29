import { FlowType } from '@ory/client-fetch';
import { sdk } from '../pages/utils/sdk';
import { createUseFlowFactory } from './create-use-flow-factory';

export const useVerificationFlow = createUseFlowFactory(
  FlowType.Verification,
  (params: URLSearchParams) => {
    return sdk.frontend.createBrowserVerificationFlowRaw({
      returnTo: params.get('return_to') ?? undefined,
    });
  },
  (id) => sdk.frontend.getVerificationFlowRaw({ id }),
);
