import { config } from '@ory';
import { Login } from '@ory/elements-react/theme';
import { getLoginFlow, OryPageParams } from '@ory/nextjs/app';

export default async function LoginPage(props: OryPageParams) {
  const flow = await getLoginFlow(config, props.searchParams);

  if (!flow) {
    return null;
  }

  return (
    <Login
      config={config}
      flow={flow}
    />
  );
}
