// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0
import { config as oryConfig } from '@ory';
import { createOryMiddleware } from "@ory/nextjs/middleware"

// This function can be marked `async` if using `await` inside
export const middleware = createOryMiddleware(oryConfig)

// See "Matching Paths" below to learn more
export const config = {}
