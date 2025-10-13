// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { config } from '@ory';
import { Registration } from '@ory/elements-react/theme';
import { getRegistrationFlow, OryPageParams } from '@ory/nextjs/app';

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
