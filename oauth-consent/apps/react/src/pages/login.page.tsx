import {Login as OryLogin} from "@ory/elements-react/theme";
import {useLoginFlow} from "../ory/use-login-flow.hook";
import {oryConfiguration} from "./__oryConfiguration";

export const LoginPage = () => {
    const flow = useLoginFlow()

    if (!flow) {
        return <div>Flow not found</div>
    }

    return (
        <>
            <div className="bg-gray-100 p-4">Test Tailwind</div>
            <div className="bg-red-400 p-4">Test Tailwind</div>
            <OryLogin
                flow={flow}
                config={oryConfiguration}
                // components={{
                //     Card: {
                //         // Root: DefaultCard,
                //         // Footer: overrides?.Card?.Footer ?? DefaultCardFooter,
                //         // Header: overrides?.Card?.Header ?? DefaultCardHeader,
                //         // Content: overrides?.Card?.Content ?? DefaultCardContent,
                //         // Logo: overrides?.Card?.Logo ?? DefaultCardLogo,
                //         // Divider: overrides?.Card?.Divider ?? DefaultHorizontalDivider,
                //         // AuthMethodListContainer:
                //         //     overrides?.Card?.AuthMethodListContainer ??
                //         //     DefaultAuthMethodListContainer,
                //         // AuthMethodListItem:
                //         //     overrides?.Card?.AuthMethodListItem ?? DefaultAuthMethodListItem,
                //         // SettingsSection: overrides?.Card?.SettingsSection ?? DefaultFormSection,
                //         // SettingsSectionContent:
                //         //     overrides?.Card?.SettingsSectionContent ?? DefaultFormSectionContent,
                //         // SettingsSectionFooter:
                //         //     overrides?.Card?.SettingsSectionFooter ?? DefaultFormSectionFooter,
                //     },
                //     // Node: {
                //     //     Button: overrides?.Node?.Button ?? DefaultButton,
                //     //     SsoButton: overrides?.Node?.SsoButton ?? DefaultButtonSocial,
                //     //     Input: overrides?.Node?.Input ?? DefaultInput,
                //     //     CodeInput: overrides?.Node?.CodeInput ?? DefaultPinCodeInput,
                //     //     Image: overrides?.Node?.Image ?? DefaultImage,
                //     //     Label: overrides?.Node?.Label ?? DefaultLabel,
                //     //     Checkbox: overrides?.Node?.Checkbox ?? DefaultCheckbox,
                //     //     Text: overrides?.Node?.Text ?? DefaultText,
                //     //     Anchor: overrides?.Node?.Anchor ?? DefaultLinkButton,
                //     //     Captcha: overrides?.Node?.Captcha ?? DefaultCaptcha,
                //     //     ConsentScopeCheckbox:
                //     //         overrides?.Node?.ConsentScopeCheckbox ?? DefaultConsentScopeCheckbox,
                //     // },
                //     // Form: {
                //     //     Root: overrides?.Form?.Root ?? DefaultFormContainer,
                //     //     Group: overrides?.Form?.Group ?? DefaultGroupContainer,
                //     //     SsoRoot: overrides?.Form?.SsoRoot ?? DefaultSocialButtonContainer,
                //     //     RecoveryCodesSettings:
                //     //         overrides?.Form?.RecoveryCodesSettings ?? DefaultSettingsRecoveryCodes,
                //     //     TotpSettings: overrides?.Form?.TotpSettings ?? DefaultSettingsTotp,
                //     //     SsoSettings: overrides?.Form?.SsoSettings ?? DefaultSettingsOidc,
                //     //     WebauthnSettings:
                //     //         overrides?.Form?.WebauthnSettings ?? DefaultSettingsWebauthn,
                //     //     PasskeySettings:
                //     //         overrides?.Form?.PasskeySettings ?? DefaultSettingsPasskey,
                //     // },
                //     // Message: {
                //     //     Root: overrides?.Message?.Root ?? DefaultMessageContainer,
                //     //     Content: overrides?.Message?.Content ?? DefaultMessage,
                //     //     Toast: overrides?.Message?.Toast ?? DefaultToast,
                //     // },
                //     // Page: {
                //     //     Header: overrides?.Page?.Header ?? DefaultPageHeader,
                //     // },
                // }}
            />
        </>
    )
};
