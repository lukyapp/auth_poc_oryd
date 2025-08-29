import { Login } from "@ory/elements-react/theme";
import { getLoginFlow, OryPageParams } from "@ory/nextjs/app";

import config from "@/app/auth/ory.config";

export default async function LoginPage(props: OryPageParams) {
  const flow = await getLoginFlow(config, props.searchParams);

  if (!flow) {
    return null;
  }

  return (
    <Login
      flow={flow}
      config={config}
      components={{
        Card: {},
      }}
    />
  );
}
