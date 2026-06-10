"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CloudChatPanel from "@/components/chat/CloudChatPanel";

export default function CloudPage() {
  const router = useRouter();

  useEffect(() => {
    fetch("/api/workspace")
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (r.status === 404 && data.error === "no_workspace") {
          router.push("/onboarding");
          return;
        }
        if (!r.ok) router.push("/sign-in");
      })
      .catch(() => router.push("/sign-in"));
  }, [router]);

  return <CloudChatPanel />;
}
