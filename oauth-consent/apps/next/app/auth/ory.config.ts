import pathConfig from "@/path.config";
import { OryClientConfiguration } from "@infra/ory";

const path = pathConfig.authPath;
const config: OryClientConfiguration = {
  project: {
    default_locale: "en",
    default_redirect_url: "/",
    locale_behavior: "force_default",
    name: "Ory Next.js App Router Example",
    registration_enabled: true,
    verification_enabled: true,
    recovery_enabled: true,
    // ui path
    error_ui_url: path.error_ui_url,
    login_ui_url: path.login_ui_url,
    recovery_ui_url: path.recovery_ui_url,
    registration_ui_url: path.registration_ui_url,
    verification_ui_url: path.verification_ui_url,
    settings_ui_url: path.settings_ui_url,
  },
  // sdk: {
  //     url: process.env.NEXT_PUBLIC_ORY_SDK_URL
  // }
};

export default config;
