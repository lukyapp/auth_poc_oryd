// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

"use client"

import {useIntl} from "react-intl";
import {FlowType} from "@ory/client-fetch";
import { useOryConfiguration, useOryFlow } from "@ory/elements-react"
import {CardLogo} from "@ui";

/**
 * The DefaultCardLogo component renders the logo from the {@link @ory/elements-react!OryProvider} or falls back to the project name.
 *
 * @returns the default logo for the Ory Card component.
 * @group Components
 * @category Default Components
 * @see {@link @ory/elements-react!OryProvider}
 * @see {@link @ory/elements-react!OryElementsConfiguration}
 */
export function DefaultCardLogo() {
  const intl = useIntl()

  const config = useOryConfiguration()
  const context = useOryFlow()

  let clientName: string | undefined
  if (context.flowType === FlowType.Login) {
      clientName = context.flow.oauth2_login_request?.client.client_name
  }


  return (
      <CardLogo
          name={
              intl.formatMessage({
                  id: clientName ? "login.header.titleWithClientName" : "login.header.title",
              }, { clientName })
          }
          logo_light_url={config.project.logo_light_url}
      />
  )
}
