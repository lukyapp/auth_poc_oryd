// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { ComponentPropsWithoutRef } from "react"
import { OryCardProps } from "@ory/elements-react"
import {CardRoot} from "@ui";

import { DefaultCardContent } from "./content"
import { DefaultCurrentIdentifierButton } from "./current-identifier-button"
import { DefaultCardFooter } from "./footer"
import { DefaultCardHeader } from "./header"
import { DefaultCardLogo } from "./logo"

/**
 * The DefaultCard component is a styled container that serves as the main card layout for Ory Elements.
 *
 * @param props - The properties for the DefaultCard component.
 * @returns
 * @group Components
 * @category Default Components
 */
export function DefaultCard({
  children,
  ...rest
}: OryCardProps & ComponentPropsWithoutRef<"div">) {
  return (
      <CardRoot {...rest}>
          {children}
      </CardRoot>
  )
}

export {
  DefaultCardContent,
  DefaultCardFooter,
  DefaultCardHeader,
  DefaultCardLogo,
  DefaultCurrentIdentifierButton,
}
