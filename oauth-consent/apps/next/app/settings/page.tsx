import { Settings } from "@infra/ory/theme";
import { getSettingsFlow, OryPageParams } from "@infra/ory/nextjs/app";
import "@ory/elements-react/theme/styles.css";

import config from "@/app/auth/ory.config";
import { SessionProvider } from "@infra/ory/client";

export default async function SettingsPage(props: OryPageParams) {
  const flow = await getSettingsFlow(config, props.searchParams);

  if (!flow) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 items-center mb-8">
      {/*<SessionProvider>*/}
      <Settings
        flow={flow}
        config={config}
        components={{
          Card: {},
        }}
      />
      {/*</SessionProvider>*/}
    </div>
  );
}
