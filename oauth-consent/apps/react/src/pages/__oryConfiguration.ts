import type {OryClientConfiguration} from "@ory/elements-react";
import {orySdkUrl} from "../ory/utils";

export const oryConfiguration: OryClientConfiguration = {
    sdk: {
        url: orySdkUrl(),
    },
    project: {
        default_locale: "en",
        default_redirect_url: "/",
        error_ui_url: "/error",
        locale_behavior: "force_default",
        name: "Ory Next.js App Router Example",
        registration_enabled: true,
        verification_enabled: true,
        recovery_enabled: true,
        registration_ui_url: "/registration",
        verification_ui_url: "/verification",
        recovery_ui_url: "/recovery",
        login_ui_url: "/login",
        settings_ui_url: "/settings",
    },
}