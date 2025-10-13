import { PropsWithChildren } from 'react';
import { UiNode } from '@ory/client-fetch';

import { cn } from '@utils';

type Props = PropsWithChildren & {
  nodes: UiNode[];
};
export const FormSsoRoot = ({ children, nodes }: Props) => {
  return (
    <div
      className={cn('grid gap-3', {
        // needed because tailwind is not compiling dynamic classes
        'grid-cols-1': nodes.length % 4 <= 2,
        'grid-cols-3': nodes.length % 3 === 0,
        'grid-cols-4': nodes.length > 1 && nodes.length % 4 === 0,
      })}
    >
      {children}
    </div>
  );
};
