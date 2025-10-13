// Copyright © 2025 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { PropsWithChildren } from "react"
import {CardAuthMethodListContainer} from "@ui";

export function DefaultAuthMethodListContainer({
  children,
}: PropsWithChildren) {
    return <CardAuthMethodListContainer>
        {children}
    </CardAuthMethodListContainer>
}
