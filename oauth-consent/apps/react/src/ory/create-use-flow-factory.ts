import { type ApiResponse, FlowType, handleFlowError } from '@ory/client-fetch';
import { useEffect, useState } from 'react';
import { useReplace } from '../hooks/routing/use-replace.hook';
import { useUrlSearchParams } from '../hooks/routing/use-url-search-params.hook';
import {
  handleRestartFlow,
  onValidationError,
  rewriteJsonResponse,
  useOnRedirect,
} from './utils';

export function toValue<T extends object>(res: ApiResponse<T>): Promise<T> {
  // Remove all undefined values from the response (array and object) using lodash:
  // Remove all (nested) undefined values from the response using lodash
  return res.value().then((v) => rewriteJsonResponse(v));
}

interface Flow {
  id: string;
}

export function createUseFlowFactory<T extends Flow>(
  flowType: FlowType,
  createFlow: (params: URLSearchParams) => Promise<ApiResponse<T>>,
  getFlow: (id: string) => Promise<ApiResponse<T>>,
): () => T | null | void {
  return () => {
    const [flow, setFlow] = useState<T>();
    const { replace } = useReplace();
    const searchParams = useUrlSearchParams();
    const flowId = searchParams.get('flow');

    const onRestartFlow = handleRestartFlow(searchParams, flowType);
    const onRedirect = useOnRedirect();

    const errorHandler = handleFlowError({
      onValidationError,
      onRestartFlow,
      onRedirect,
    });

    useEffect(() => {
      const handleSetFlow = async (flow: T) => {
        setFlow(flow);
        await replace({
          query: { flow: flow.id },
        });
        return;
      };

      if (flow !== undefined) {
        return;
      }

      if (!flowId) {
        createFlow(searchParams)
          .then(toValue)
          .then(handleSetFlow)
          .catch(errorHandler);
        return;
      }

      getFlow(flowId).then(toValue).then(handleSetFlow).catch(errorHandler);
    }, [searchParams, flow, flowId, errorHandler, replace]);

    return flow;
  };
}
