"use client";

import { kratos } from "@/ory";
import pathConfig from "@/path.config";
import { Session } from "@ory/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useSession() {
  const path = pathConfig.authPath;
  const router = useRouter();
  const [session, setSession] = useState<Session | undefined>();
  useEffect(() => {
    kratos
      .toSession()
      .then(({ data }) => setSession(data))
      .catch(() => router.push(path.login_ui_url));
  }, []);
  return session;
}
