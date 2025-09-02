import config from "@/app/auth/ory.config";
import { getLoginFlow, OryPageParams } from "@infra/ory/nextjs/app";
import { Login } from "@infra/ory/theme";

export default async function LoginPage(props: OryPageParams) {
  const flow = await getLoginFlow(config, props.searchParams);

  if (!flow) {
    return null;
  }

  return <Login config={config} flow={flow} />;
}
