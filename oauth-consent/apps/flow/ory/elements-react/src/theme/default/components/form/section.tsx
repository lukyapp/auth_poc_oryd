// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import {
  OryFormSectionContentProps,
  OryFormSectionFooterProps,
  OryFormSectionProps,
} from "@ory/elements-react"
import {CardSettingsSection, CardSettingsSectionContent, CardSettingsSectionFooter} from "@ui";

const DefaultFormSection = ({
  children,
  nodes,
  ...rest
}: OryFormSectionProps) => {
  return (
      <CardSettingsSection
          {...rest}
          nodes={nodes}
      >
          {children}
      </CardSettingsSection>
  )
}

const DefaultFormSectionContent = ({
  title,
  description,
  children,
}: OryFormSectionContentProps) => {
  return (
      <CardSettingsSectionContent
          title={title}
          description={description}
      >
          {children}
      </CardSettingsSectionContent>
  )
}

const DefaultFormSectionFooter = ({
  children,
  text,
}: OryFormSectionFooterProps) => {
  return (
    <CardSettingsSectionFooter text={text}>
      {children}
    </CardSettingsSectionFooter>
  )
}

export {
  DefaultFormSection,
  DefaultFormSectionContent,
  DefaultFormSectionFooter,
}
