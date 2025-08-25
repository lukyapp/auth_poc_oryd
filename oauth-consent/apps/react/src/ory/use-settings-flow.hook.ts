import { FlowType } from '@ory/client-fetch';
import { createUseFlowFactory } from './create-use-flow-factory';
import { clientSideFrontendClient } from './utils';

export const useSettingsFlow = createUseFlowFactory(
  FlowType.Settings,
  (params: URLSearchParams) => {
    return clientSideFrontendClient().createBrowserSettingsFlowRaw({
      returnTo: params.get('return_to') ?? undefined,
      cookie: params.get('cookie') ?? undefined,
    });
  },
  (id) => clientSideFrontendClient().getSettingsFlowRaw({ id }),
);
