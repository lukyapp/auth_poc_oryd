"use client";

import config from "@/app/auth/ory.config";
import { useCsrfToken } from "@/components/use-csrf-token";
import { useSession } from "@/components/use-session";
import { Consent } from "@infra/ory/theme";
import { OAuth2ConsentRequest } from "@ory/client-fetch";
import React from "react";

interface ConsentFormProps {
  consentRequest: OAuth2ConsentRequest;
}

export function ConsentUi({ consentRequest }: ConsentFormProps) {
  const session = useSession();
  const csrfToken = useCsrfToken();

  if (!session || !csrfToken) {
    return null;
  }

  return (
    <Consent
      config={config}
      // @ts-expect-error consent session
      session={session}
      consentChallenge={consentRequest}
      formActionUrl={"/api/consent/submit"}
      csrfToken={csrfToken}
    />
  );
}
