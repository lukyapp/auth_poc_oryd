// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { type LogoutFlow, type Session } from '@ory/client-fetch';
import { useOryConfiguration } from '@infra/ory';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { GearIcon, ExitIcon } from '@radix-ui/react-icons';
import { useClientLogout } from '../../utils/logout';
import { getUserInitials } from '../../utils/user';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { UserAvatar } from './user-avater';

type UserMenuProps = {
  session: Session | null;
  logoutFlow?: LogoutFlow;
};

export const UserMenu = ({ session }: UserMenuProps) => {
  const config = useOryConfiguration();
  const initials = getUserInitials(session);
  const { logoutFlow } = useClientLogout(config);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserAvatar
          initials={initials}
          title="User Menu"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="flex gap-3 px-5 py-4.5">
          <UserAvatar
            disabled
            initials={initials}
          />
          <div className="flex flex-col justify-center text-sm leading-tight">
            <div className="leading-tight font-medium text-interface-foreground-default-primary">
              {initials.primary}
            </div>
            {initials.secondary && (
              <div className="leading-tight text-interface-foreground-default-tertiary">
                {initials.secondary}
              </div>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <a href="/settings">
            <GearIcon
              height={20}
              width={20}
            />{' '}
            User settings
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          disabled={!logoutFlow?.logout_url}
        >
          <a href={logoutFlow?.logout_url}>
            <ExitIcon
              height={20}
              width={20}
            />{' '}
            Logout
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
