import { PropsWithChildren } from 'react';
import { FlowType } from '@ory/client-fetch';

import { cn } from '@utils';

type Props = PropsWithChildren & { flowType: FlowType };
export const MessageRoot = ({ children, flowType }: Props) => {
  return (
    <section className={cn(flowType === FlowType.Settings ? 'text-center' : 'text-left')}>
      {children}
    </section>
  );
};
