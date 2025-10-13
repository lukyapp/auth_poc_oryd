import { ComponentPropsWithoutRef } from 'react';
import { clsx } from 'clsx';

import { IconName, icons } from './icons';

export const Icon = ({
  name,
  className,
}: {
  name: IconName;
} & Pick<ComponentPropsWithoutRef<'p'>, 'className'>) => {
  const _Icon = icons[name];
  return <_Icon className={clsx('size-6', className)} />;
};
