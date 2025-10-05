import { Registration } from '@infra/ory/theme';
import { getRegistrationFlow, type OryPageParams } from '@infra/ory/nextjs/app';

import config from '@/app/auth/ory.config';

export default async function RegistrationPage(props: OryPageParams) {
  const flow = await getRegistrationFlow(config, props.searchParams);

  if (!flow) {
    return null;
  }

  return (
    <Registration
      flow={flow}
      config={config}
    />
  );
}
