// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import {
  type OnRedirectHandler,
  type UpdateLoginFlowBody,
  type UpdateRecoveryFlowBody,
  type UpdateRegistrationFlowBody,
  type UpdateSettingsFlowBody,
  type UpdateVerificationFlowBody,
} from '@ory/client-fetch';
import { type OryFlowContainer } from './flowContainer';

/**
 * Props for the submit handler
 */
export type OnSubmitHandlerProps<
  T extends
    | UpdateLoginFlowBody
    | UpdateRegistrationFlowBody
    | UpdateVerificationFlowBody
    | UpdateRecoveryFlowBody
    | UpdateSettingsFlowBody,
> = {
  /**
   * This method is used to update the flow container when a validation error occurs, for example.
   */
  setFlowContainer: (flowContainer: OryFlowContainer) => void;

  /**
   * The form values to submit.
   */
  body: T;

  /**
   * This method is used to redirect the user to a different page.
   */
  onRedirect: OnRedirectHandler;
};
