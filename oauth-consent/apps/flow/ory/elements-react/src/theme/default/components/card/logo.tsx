// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { useOryConfiguration } from "@ory/elements-react"
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
  const config = useOryConfiguration()

  return (
      <CardLogo
          name={config.project.name}
          logo_light_url={config.project.logo_light_url}
      />
  )
}
