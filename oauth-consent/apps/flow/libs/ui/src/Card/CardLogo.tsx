import Image from 'next/image';

type Props = {
  name: string;
  logo_light_url?: string;
};
export const CardLogo = ({ logo_light_url, name }: Props) => {
  if (logo_light_url) {
    return (
      <Image
        src={logo_light_url}
        className="h-full max-h-9 self-start"
        alt="Logo"
      />
    );
  }

  return (
    <h1 className="text-xl leading-normal font-semibold text-interface-foreground-default-primary">
      {name}
    </h1>
  );
};
