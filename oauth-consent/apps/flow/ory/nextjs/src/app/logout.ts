// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0
import { headers } from "next/headers"
import { LogoutFlow } from "@ory/client-fetch"

import { rewriteJsonResponse } from "../utils/rewrite"
import {orySdkUrl} from "../utils/sdk"

import { serverSideFrontendClient } from "./client"

/**
 * Use this method in an app router page to create a new logout flow. This method works with server-side rendering.
 *
 * @example
 * ```tsx
 * import { getLogoutFlow } from "@ory/nextjs/app"
 *
 * async function LogoutLink() {
 *   const flow = await getLogoutFlow()
 *
 *   return (
 *     <a href={flow.logout_url}>
 *       Logout
 *     </a>
 *   )
 * }
 *
 * ```
 *
 * @param params - The query parameters of the request.
 * @public
 */
export async function getLogoutFlow({
  returnTo,
}: { returnTo?: string } = {}): Promise<LogoutFlow> {
  const h = await headers()

  const url = orySdkUrl()
    
  return serverSideFrontendClient()
    .createBrowserLogoutFlow({
      cookie: h.get("cookie") ?? "",
      returnTo,
    })
    .then((v: LogoutFlow): LogoutFlow => rewriteJsonResponse(v, url))
}
