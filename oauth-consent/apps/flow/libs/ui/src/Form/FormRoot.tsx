import { ComponentPropsWithoutRef, FormEventHandler, PropsWithChildren } from 'react';

type Props = PropsWithChildren &
  ComponentPropsWithoutRef<'form'> & {
    onSubmit: FormEventHandler<HTMLFormElement>;
  };
export const FormRoot = ({ children, onSubmit, action, method }: Props) => {
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      action={action}
      method={method}
      className={'grid gap-8'}
    >
      {children}
    </form>
  );
};
