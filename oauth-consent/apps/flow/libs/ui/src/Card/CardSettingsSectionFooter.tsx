import { PropsWithChildren } from 'react';

import { cn } from '@utils';

type Props = PropsWithChildren & {
  text?: string;
};
export const CardSettingsSectionFooter = ({ children, text }: Props) => {
  return (
    <div
      className={cn(
        'flex min-h-[72px] items-center justify-between gap-2 rounded-b-cards border border-interface-border-default-primary bg-interface-background-default-secondary px-6 py-4 text-interface-foreground-default-tertiary',
      )}
    >
      <span>{text}</span>
      {children}
    </div>
  );
};
