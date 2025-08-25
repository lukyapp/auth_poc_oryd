import { FlowType } from '@ory/client-fetch';
import { createUseFlowFactory } from './create-use-flow-factory';
import { clientSideFrontendClient } from './utils';

export const useRecoveryFlow = createUseFlowFactory(
  FlowType.Recovery,
  (params: URLSearchParams) => {
    return clientSideFrontendClient().createBrowserRecoveryFlowRaw({
      returnTo: params.get('return_to') ?? undefined,
    });
  },
  (id) => clientSideFrontendClient().getRecoveryFlowRaw({ id }),
);
