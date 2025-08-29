import { FlowType } from '@ory/client-fetch';
import { sdk } from '../pages/utils/sdk';
import { createUseFlowFactory } from './create-use-flow-factory';

export const useRecoveryFlow = createUseFlowFactory(
  FlowType.Recovery,
  (params: URLSearchParams) => {
    return sdk.frontend.createBrowserRecoveryFlowRaw({
      returnTo: params.get('return_to') ?? undefined,
    });
  },
  (id) => sdk.frontend.getRecoveryFlowRaw({ id }),
);
