// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { config } from '@ory';
import { Verification } from '@ory/elements-react/theme';
import { getVerificationFlow, OryPageParams } from '@ory/nextjs/app';

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
