// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

"use client"

import { PropsWithChildren } from "react"
import { useIntl } from "react-intl"
import {
  messageTestId,
  OryFormRootProps,
  uiTextToFormattedMessage,
  useOryFlow,
} from "@ory/elements-react"
import { OryMessageContentProps } from "@ory/elements-react"
import {FormRoot, MessageRoot} from "@ui";

import { cn } from "../../utils/cn"

/**
 * The default form container for Ory Elements.
 *
 * @param props - The properties for the DefaultFormContainer component.
 * @returns
 * @group Components
 * @category Default Components
 */
export function DefaultFormContainer({
  children,
  onSubmit,
  action,
  method,
}: PropsWithChildren<OryFormRootProps>) {
  return (
      <FormRoot
          onSubmit={onSubmit}
          action={action}
          method={method}
      >
          {children}
      </FormRoot>
  )
}

/**
 * The default message container for Ory Elements.
 *
 * @param props - The properties for the DefaultMessageContainer component.
 * @returns
 * @group Components
 * @category Default Components
 */
export function DefaultMessageContainer({ children }: PropsWithChildren) {
  const { flowType } = useOryFlow()
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return null
  }

  return (
      <MessageRoot flowType={flowType}>
          {children}
      </MessageRoot>
  )
}

/**
 * The default message component for Ory Elements.
 *
 * @param props - The properties for the DefaultMessage component.
 * @returns
 * @group Components
 * @category Default Components
 * @see {@link @ory/elements-react!uiTextToFormattedMessage}
 */
export function DefaultMessage({ message }: OryMessageContentProps) {
  const intl = useIntl()
  return (
    <span
      className={cn(
        "leading-normal",
        message.type === "error" &&
          "text-interface-foreground-validation-danger",
        message.type === "info" &&
          "text-interface-foreground-default-secondary",
        message.type === "success" &&
          "text-interface-foreground-validation-success",
      )}
      {...messageTestId(message)}
    >
      {uiTextToFormattedMessage(message, intl)}
    </span>
  )
}

export { DefaultButtonSocial } from "./sso"
