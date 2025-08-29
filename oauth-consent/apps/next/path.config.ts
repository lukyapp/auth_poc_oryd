const pathConfig = {
    authPath: {
        consent_ui_url: "/auth/consent",
        error_ui_url: "/auth/error",
        login_ui_url: "/auth/login",
        recovery_ui_url: "/auth/recovery",
        registration_ui_url: "/auth/registration",
        verification_ui_url: "/auth/verification",
        settings_ui_url: "/settings",
    },
    clientPath: {
        consent_ui_url: "/client/consent",
        error_ui_url: "/client/error",
        login_ui_url: "/client/login",
        recovery_ui_url: "/client/recovery",
        registration_ui_url: "/client/registration",
        verification_ui_url: "/client/verification",
        settings_ui_url: "/settings",
    }
} as const;

export default pathConfig
