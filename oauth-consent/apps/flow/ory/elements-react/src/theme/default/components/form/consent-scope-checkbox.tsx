// Copyright © 2025 Ory Corp
// SPDX-License-Identifier: Apache-2.0

"use client"

import { useIntl } from "react-intl"
import { OryNodeConsentScopeCheckboxProps } from "@ory/elements-react"
import * as Switch from "@radix-ui/react-switch"

import { ListItem } from "../card/list-item"

type ScopeIconNames = 'openid' | 'offline_access' | 'profile' | 'email' | 'phone'

export function DefaultConsentScopeCheckbox({
  attributes,
  onCheckedChange,
}: OryNodeConsentScopeCheckboxProps) {
  const intl = useIntl()
  const iconName = attributes.value as ScopeIconNames ?? 'profile'
  return (
      <ListItem
          as="label"
          iconName={iconName}
          title={intl.formatMessage({
              id: `consent.scope.${attributes.value}.title`,
              defaultMessage: attributes.value,
          })}
          description={intl.formatMessage({
              id: `consent.scope.${attributes.value}.description`,
              defaultMessage: [],
          })}
          className="col-span-2"
          data-testid="ory/screen/consent/scope-checkbox-label"
      >
          <Switch.Root
              className="relative h-4 w-7 rounded-identifier border border-toggle-border-default bg-toggle-background-default p-[3px] transition-all data-[state=checked]:border-toggle-border-checked data-[state=checked]:bg-toggle-background-checked"
              data-testid={`ory/screen/consent/scope-checkbox`}
              value={attributes.value}
              onCheckedChange={onCheckedChange}
              defaultChecked={true}
          >
              <Switch.Thumb className="block size-2 rounded-identifier bg-toggle-foreground-default transition-all data-[state=checked]:translate-x-3 data-[state=checked]:bg-toggle-foreground-checked" />
          </Switch.Root>
      </ListItem>
  )
}
