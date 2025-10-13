// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { OryFormGroupProps, useOryFlow } from "@ory/elements-react"
import {FormGroup} from "@ui";

import { countRenderableChildren } from "../../../../util/childCounter"

export function DefaultGroupContainer({ children }: OryFormGroupProps) {
  const { flowType } = useOryFlow()

  const count = countRenderableChildren(children)
  if (count === 0) {
    return null
  }

  return (
      <FormGroup
          flowType={flowType}
      >
          {children}
      </FormGroup>
  )
}
