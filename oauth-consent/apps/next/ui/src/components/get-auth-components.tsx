import { DefaultAuthMethodListContainer } from '@/infra/ory/src/theme/default/components/card/auth-method-list-container';
import { DefaultAuthMethodListItem } from '@/infra/ory/src/theme/default/components/card/auth-method-list-item';
import { DefaultButton } from '@/infra/ory/src/theme/default/components/form/button';
import { DefaultCaptcha } from '@/infra/ory/src/theme/default/components/form/captcha';
import { DefaultCheckbox } from '@/infra/ory/src/theme/default/components/form/checkbox';
import { DefaultConsentScopeCheckbox } from '@/infra/ory/src/theme/default/components/form/consent-scope-checkbox';
import { DefaultGroupContainer } from '@/infra/ory/src/theme/default/components/form/group-container';
import { DefaultHorizontalDivider } from '@/infra/ory/src/theme/default/components/form/horizontal-divider';
import { DefaultImage } from '@/infra/ory/src/theme/default/components/form/image';
import { DefaultInput } from '@/infra/ory/src/theme/default/components/form/input';
import { DefaultLabel } from '@/infra/ory/src/theme/default/components/form/label';
import { DefaultLinkButton } from '@/infra/ory/src/theme/default/components/form/link-button';
import { DefaultPinCodeInput } from '@/infra/ory/src/theme/default/components/form/pin-code-input';
import {
  DefaultFormSection,
  DefaultFormSectionContent,
  DefaultFormSectionFooter,
} from '@/infra/ory/src/theme/default/components/form/section';
import { DefaultSocialButtonContainer } from '@/infra/ory/src/theme/default/components/form/sso';
import { DefaultText } from '@/infra/ory/src/theme/default/components/form/text';
import { DefaultPageHeader } from '@/infra/ory/src/theme/default/components/generic/page-header';
import { DefaultToast } from '@/infra/ory/src/theme/default/components/generic/toast';
import { DefaultSettingsOidc } from '@/infra/ory/src/theme/default/components/settings/settings-oidc';
import { DefaultSettingsPasskey } from '@/infra/ory/src/theme/default/components/settings/settings-passkey';
import { DefaultSettingsRecoveryCodes } from '@/infra/ory/src/theme/default/components/settings/settings-recovery-codes';
import { DefaultSettingsTotp } from '@/infra/ory/src/theme/default/components/settings/settings-totp';
import { DefaultSettingsWebauthn } from '@/infra/ory/src/theme/default/components/settings/settings-webauthn';
import { AuthCard } from '@/ui/src/components/auth.card';
import { type OryFlowComponents } from '@infra/ory';
import {
  DefaultButtonSocial,
  DefaultCardContent,
  DefaultCardFooter,
  DefaultCardHeader,
  DefaultCardLogo,
  DefaultFormContainer,
  DefaultMessage,
  DefaultMessageContainer,
} from '@infra/ory/theme';

/**
 * Merges the default Ory components with any provided overrides.
 *
 * The output of this function is a complete set of components that can be used in Ory flows.
 *
 * @param overrides - Optional overrides for the default components.
 * @returns
 *
 * @category Utilities
 */
export const getAuthComponents = (): OryFlowComponents => {
  return {
    Card: {
      Root: AuthCard,
      Footer: DefaultCardFooter,
      Header: DefaultCardHeader,
      Content: DefaultCardContent,
      Logo: DefaultCardLogo,
      Divider: DefaultHorizontalDivider,
      AuthMethodListContainer: DefaultAuthMethodListContainer,
      AuthMethodListItem: DefaultAuthMethodListItem,
      SettingsSection: DefaultFormSection,
      SettingsSectionContent: DefaultFormSectionContent,
      SettingsSectionFooter: DefaultFormSectionFooter,
    },
    Node: {
      Button: DefaultButton,
      SsoButton: DefaultButtonSocial,
      Input: DefaultInput,
      CodeInput: DefaultPinCodeInput,
      Image: DefaultImage,
      Label: DefaultLabel,
      Checkbox: DefaultCheckbox,
      Text: DefaultText,
      Anchor: DefaultLinkButton,
      Captcha: DefaultCaptcha,
      ConsentScopeCheckbox: DefaultConsentScopeCheckbox,
    },
    Form: {
      Root: DefaultFormContainer,
      Group: DefaultGroupContainer,
      SsoRoot: DefaultSocialButtonContainer,
      RecoveryCodesSettings: DefaultSettingsRecoveryCodes,
      TotpSettings: DefaultSettingsTotp,
      SsoSettings: DefaultSettingsOidc,
      WebauthnSettings: DefaultSettingsWebauthn,
      PasskeySettings: DefaultSettingsPasskey,
    },
    Message: {
      Root: DefaultMessageContainer,
      Content: DefaultMessage,
      Toast: DefaultToast,
    },
    Page: {
      Header: DefaultPageHeader,
    },
  };
};
