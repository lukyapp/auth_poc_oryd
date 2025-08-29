import { FlowType } from '@ory/client-fetch';
import {sdk} from "../pages/utils/sdk";
import { createUseFlowFactory } from './create-use-flow-factory';

export const useLoginFlow = createUseFlowFactory(
  FlowType.Login,
  (params: URLSearchParams) => {
    return sdk.frontend.createBrowserLoginFlowRaw({
      refresh: params.get('refresh') === 'true',
      aal: params.get('aal') ?? undefined,
      returnTo: params.get('return_to') ?? undefined,
      cookie: params.get('cookie') ?? undefined,
      loginChallenge: params.get('login_challenge') ?? undefined,
      organization: params.get('organization') ?? undefined,
      via: params.get('via') ?? undefined,
    });
  },
  (id) => sdk.frontend.getLoginFlowRaw({ id }),
);
