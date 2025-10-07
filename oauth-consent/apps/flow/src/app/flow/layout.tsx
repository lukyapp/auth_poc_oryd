import { type PropsWithChildren } from 'react';
import { AuthLayout } from '@packages/ui';

export default function DefaultCardLayout({ children }: PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}
