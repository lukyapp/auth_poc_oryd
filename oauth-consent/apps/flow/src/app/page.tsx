// Copyright © 2024 Ory Corp
// SPDX-License-Identifier: Apache-2.0

import { Metadata } from 'next';
import Link from 'next/link';
import { pathConfig } from '@ory';
import { SessionProvider } from '@ory/elements-react/client';
import { getLogoutFlow, getServerSession } from '@ory/nextjs/app';

import OryLogo from './logo.svg';

export const metadata: Metadata = {
  title: 'Ory Next.js App router Example',
};

export default async function RootLayout() {
  const session = await getServerSession();
  const traits = session?.identity?.traits as {
    email: string;
    username: string;
    phone: string;
  };

  return (
    <SessionProvider session={session}>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <OryLogo />
          <h1 className="font-bold text-xl">Ory Next.js App Router Example</h1>
          {!session && (
            <div className="flex items-center gap-2 bg-white rounded-sm border flex-col w-60 p-3">
              <Link
                className="underline block w-full"
                href={pathConfig.registration_ui_url}
              >
                Registration
              </Link>
              <Link
                className="underline block w-full"
                href={pathConfig.login_ui_url}
              >
                Login
              </Link>
              <Link
                className="underline block w-full"
                href={pathConfig.recovery_ui_url}
              >
                Account Recovery
              </Link>
              <Link
                className="underline block w-full"
                href={pathConfig.verification_ui_url}
              >
                Account Verification
              </Link>
            </div>
          )}
          {session && (
            <div className="flex items-center gap-2 bg-white rounded-sm border flex-col w-60 p-3">
              <h2 className="w-full">Hi, {traits.email ?? traits.username ?? traits.phone}!</h2>
              <Link
                className="underline block w-full"
                href="/settings"
              >
                Settings
              </Link>
              <LogoutLink />
            </div>
          )}
          <div className="flex gap-2 text-sm">
            <a
              href="https://github.com/ory/elements/tree/master/examples/nextjs-pages-router"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              App Router Example
            </a>
            <a
              href="https://github.com/ory/elements/tree/master/examples/nextjs-pages-router"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Page Router Example
            </a>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}

async function LogoutLink() {
  const flow = await getLogoutFlow({});

  return (
    <Link
      className="underline block w-full"
      href={flow.logout_url}
    >
      Logout
    </Link>
  );
}
