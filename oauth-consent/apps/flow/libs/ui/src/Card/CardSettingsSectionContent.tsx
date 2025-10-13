import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  title?: string;
  description?: string;
};
export const CardSettingsSectionContent = ({ title, description, children }: Props) => {
  return (
    <div className="flex flex-col gap-8 rounded-t-cards border border-b-0 border-interface-border-default-primary bg-interface-background-default-primary px-6 py-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-interface-foreground-default-primary">{title}</h3>
        <span className="text-interface-foreground-default-secondary">{description}</span>
      </div>
      {children}
    </div>
  );
};
