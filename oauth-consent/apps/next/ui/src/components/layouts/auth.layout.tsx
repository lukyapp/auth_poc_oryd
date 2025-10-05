import { type PropsWithChildren } from 'react';
import '@ory/elements-react/theme/styles.css';

export function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="p-4 pb-8 flex items-center justify-center flex-col gap-8 min-h-screen">
      {children}
    </main>
  );
}
