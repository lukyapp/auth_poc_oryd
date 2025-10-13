import { PropsWithChildren } from 'react';
import { FlowType } from '@ory/client-fetch';

import { cn } from '@utils';

type Props = PropsWithChildren & {
  flowType: FlowType;
};
export const FormGroup = ({ children, flowType }: Props) => {
  return (
    <div
      className={cn(
        'grid',
        flowType === FlowType.OAuth2Consent ? 'grid-cols-2 gap-2' : 'grid-cols-1 gap-8',
      )}
    >
      {children}
    </div>
  );
};
