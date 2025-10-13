import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { UiNode } from '@ory/client-fetch';

export type Props = PropsWithChildren &
  Omit<ComponentPropsWithoutRef<'form'>, 'action' | 'method' | 'onSubmit'> & {
    nodes?: UiNode[];
  };
export const CardSettingsSection = ({ children, nodes: _nodes, ...rest }: Props) => {
  return (
    <form
      className="flex w-full max-w-(--breakpoint-sm) flex-col px-4 md:max-w-[712px] lg:max-w-[802px] xl:max-w-[896px]"
      {...rest}
    >
      {children}
    </form>
  );
};
