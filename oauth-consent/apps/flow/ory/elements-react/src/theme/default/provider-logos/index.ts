// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import {ElementType} from "react";

import {ObjectKeys} from "@utils";

import apple from "./apple.svg"
import auth0 from "./auth0.svg"
import discord from "./discord.svg"
import facebook from "./facebook.svg"
import github from "./github.svg"
import gitlab from "./gitlab.svg"
import google from "./google.svg"
import linkedin from "./linkedin.svg"
import microsoft from "./microsoft.svg"
import slack from "./slack.svg"
import spotify from "./spotify.svg"
import x from "./x.svg"
import yandex from "./yandex.svg"

type BrandLogo = React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>

export const brandLogos = {
  apple,
  auth0,
  discord,
  facebook,
  github,
  gitlab,
  google,
  linkedin,
  microsoft,
  slack,
  spotify,
  yandex,
  x,
} as const satisfies Record<string, BrandLogo>

export type BrandLogoName = keyof typeof brandLogos;

const isBrandLogo = (value: string): value is BrandLogoName => {
    return (ObjectKeys(brandLogos) as readonly string[]).includes(value);
};

export const getBrandLogo = (name: string, otherLogos: Record<string, ElementType> = {}) => {
    return isBrandLogo(name) ? { ...brandLogos, ...otherLogos}[name] : null
}
