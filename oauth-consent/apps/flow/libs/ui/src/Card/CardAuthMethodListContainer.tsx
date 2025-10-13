import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;
export const CardAuthMethodListContainer = ({ children }: Props) => {
  return <div className="grid grid-cols-1 gap-2">{children}</div>;
};
