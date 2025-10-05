'use server';

import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export async function AuthCard({ children }: Props) {
  return (
    <div className="flex w-full flex-1 items-start justify-center font-sans-default sm:w-[480px] sm:max-w-[480px] sm:items-center">
      <div className="relative grid w-full grid-cols-1 gap-8 border-b border-form-border-default bg-form-background-default px-8 py-12 sm:rounded-cards sm:border sm:px-12 sm:py-14">
        {children}
      </div>
    </div>
  );
}
