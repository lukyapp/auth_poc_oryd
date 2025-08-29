import { Recovery } from "@ory/elements-react/theme";
import { getRecoveryFlow, OryPageParams } from "@ory/nextjs/app";
import CustomCardHeader from "@/components/custom-card-header";

import config from "@/app/auth/ory.config";

export default async function RecoveryPage(props: OryPageParams) {
  const flow = await getRecoveryFlow(config, props.searchParams);

  if (!flow) {
    return null;
  }

  return (
    <Recovery
      flow={flow}
      config={config}
      components={{
        Card: {
          Header: CustomCardHeader,
        },
      }}
    />
  );
}
