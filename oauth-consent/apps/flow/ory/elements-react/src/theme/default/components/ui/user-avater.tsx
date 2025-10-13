// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { ComponentPropsWithoutRef, forwardRef } from "react"
import {Icon} from "@icons";

import { UserInitials } from "../../utils/user"

type UserAvatarProps = {
  initials: UserInitials
} & ComponentPropsWithoutRef<"button">

export const UserAvatar = forwardRef<HTMLButtonElement, UserAvatarProps>(
  ({ initials, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className="relative flex size-10 items-center justify-center overflow-hidden rounded-[999px] bg-button-primary-background-default hover:bg-button-primary-background-hover"
        {...rest}
      >
        <div className="relative flex size-full items-center justify-center">
          {initials.avatar ? (
            <img
              src={initials.avatar}
              alt={initials.primary}
              className="w-full object-contain"
            />
          ) : (
            <Icon
              name='user'
              className="text-button-primary-foreground-default"
            />
          )}
        </div>
      </button>
    )
  },
)
UserAvatar.displayName = "UserAvatar"
