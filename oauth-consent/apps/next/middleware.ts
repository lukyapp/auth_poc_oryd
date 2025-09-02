import oryConfig from "@/app/auth/ory.config";
import {createOryMiddleware} from "@infra/ory/nextjs/middleware";

// This function can be marked `async` if using `await` inside
export const middleware = createOryMiddleware(oryConfig)

// See "Matching Paths" below to learn more
export const config = {}
