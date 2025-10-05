import { AuthLayout } from '@ui/components';
import { type PropsWithChildren } from 'react';

export default function DefaultCardLayout({ children }: PropsWithChildren) {
  return <AuthLayout children={children} />;
}
