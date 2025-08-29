import type { LogoutFlow } from '@ory/client-fetch';
import { useEffect, useState } from 'react';
import {sdk} from "../pages/utils/sdk";

export function useLogoutFlow() {
  const [flow, setFlow] = useState<LogoutFlow | undefined>(undefined);

  const createFlow = async () => {
    const flow = await sdk.frontend.createBrowserLogoutFlow({});
    setFlow(flow);
  };

  useEffect(() => {
    if (!flow) {
      void createFlow();
    }
  }, [flow]);

  return flow;
}
