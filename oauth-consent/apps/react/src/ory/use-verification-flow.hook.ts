import { FlowType } from '@ory/client-fetch';
import { createUseFlowFactory } from './create-use-flow-factory';
import { clientSideFrontendClient } from './utils';

export const useVerificationFlow = createUseFlowFactory(
  FlowType.Verification,
  (params: URLSearchParams) => {
    return clientSideFrontendClient().createBrowserVerificationFlowRaw({
      returnTo: params.get('return_to') ?? undefined,
    });
  },
  (id) => clientSideFrontendClient().getVerificationFlowRaw({ id }),
);
