import { FlowType } from '@ory/client-fetch';
import {sdk} from "../pages/utils/sdk";
import { createUseFlowFactory } from './create-use-flow-factory';

export const useSettingsFlow = createUseFlowFactory(
  FlowType.Settings,
  (params: URLSearchParams) => {
    return sdk.frontend.createBrowserSettingsFlowRaw({
      returnTo: params.get('return_to') ?? undefined,
      cookie: params.get('cookie') ?? undefined,
    });
  },
  (id) => sdk.frontend.getSettingsFlowRaw({ id }),
);
