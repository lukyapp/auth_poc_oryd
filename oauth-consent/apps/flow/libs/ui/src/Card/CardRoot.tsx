import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

import { cn } from '@utils';

type Props = PropsWithChildren & ComponentPropsWithoutRef<'div'>;
export const CardRoot = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={cn('ory-elements', className)}
      {...rest}
    >
      <div className="flex w-full flex-1 items-start justify-center font-sans-default sm:w-[480px] sm:max-w-[480px] sm:items-center">
        <div
          className="relative grid w-full grid-cols-1 gap-8 border-b border-form-border-default bg-form-background-default px-8 py-12 sm:rounded-cards sm:border sm:px-12 sm:py-14"
          data-testid="ory/card"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
