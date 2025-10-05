import { Verification } from '@infra/ory/theme';
import { getVerificationFlow, type OryPageParams } from '@infra/ory/nextjs/app';

import config from '@/app/auth/ory.config';

export default async function VerificationPage(props: OryPageParams) {
  const flow = await getVerificationFlow(config, props.searchParams);

  if (!flow) {
    return null;
  }

  return (
    <Verification
      flow={flow}
      config={config}
    />
  );
}
