import type { LogoutFlow } from '@ory/client-fetch';
import { useEffect, useState } from 'react';
import { clientSideFrontendClient } from './utils';

export function useLogoutFlow() {
  const [flow, setFlow] = useState<LogoutFlow | undefined>(undefined);

  const createFlow = async () => {
    const flow = await clientSideFrontendClient().createBrowserLogoutFlow({});
    setFlow(flow);
  };

  useEffect(() => {
    if (!flow) {
      void createFlow();
    }
  }, [flow]);

  return flow;
}
