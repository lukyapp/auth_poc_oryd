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
    // const router = useRouter()
    const { replace } = useReplace();
    const searchParams = useUrlSearchParams();
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

      const id = searchParams.get('flow');

      if (flow !== undefined) {
        return;
      }

      if (!id) {
        createFlow(searchParams)
          .then(toValue)
          .then(handleSetFlow)
          .catch(errorHandler);
        return;
      }

      getFlow(id).then(toValue).then(handleSetFlow).catch(errorHandler);
    }, [searchParams, flow, errorHandler, replace]);

    return flow;
  };
}
