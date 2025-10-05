import { getRecoveryFlow, type OryPageParams } from '@infra/ory/nextjs/app';
import { Recovery } from '@infra/ory/theme';

import config from '@/app/auth/ory.config';

export default async function RecoveryPage(props: OryPageParams) {
  const flow = await getRecoveryFlow(config, props.searchParams);

  if (!flow) {
    return null;
  }

  return (
    <Recovery
      flow={flow}
      config={config}
    />
  );
}
