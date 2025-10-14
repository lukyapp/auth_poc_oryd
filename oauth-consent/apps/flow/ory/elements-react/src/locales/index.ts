// Copyright © 2023 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { default as de } from "./de.json"
import { default as en } from "./en.json"
import { default as es } from "./es.json"
import { default as fr } from "./fr.json"
import { default as nl } from "./nl.json"
import { default as no } from "./no.json"
import { default as pl } from "./pl.json"
import { default as pt } from "./pt.json"
import { default as sv } from "./sv.json"

// export type TranslationFile = {
//   [K in keyof typeof en]: string
// }

type I18nKey = keyof typeof en

export const supportedLocales = ["en", "de", "es", "fr", "nl", "pl", "pt", "sv", "no"] as const

export type SupportedLocale = typeof supportedLocales[number]

export function isSupportedLocale(locale: string): locale is SupportedLocale {
    return (supportedLocales as readonly string[]).includes(locale)
}

// TODO: we can probably provide typesafety here, since we know all keys.
// However, tsup dts doesn't seem to generate proper dts files if we reference a JSON imported file in the type here.
// A potential workaround is to have some code generation tool, that runs after the message extraction and produces a dts file containing all known keys.
export type LocaleMap = Record<SupportedLocale, Record<I18nKey, string>>

export const OryLocales = {
  en,
  de,
  es,
  fr,
  nl,
  pl,
  pt,
  sv,
  no,
} as const satisfies LocaleMap
