import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/app(.*)", "/cloud(.*)", "/onboarding"]);
const isProtectedApi = createRouteMatcher([
  "/api/chat(.*)",
  "/api/workspace(.*)",
  "/api/messages(.*)",
  "/api/feedback(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedApi(req)) {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return;
  }

  if (isProtectedRoute(req)) {
    const { userId, redirectToSignIn } = await auth();
    if (!userId) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|json)).*)",
    "/__clerk/:path*",
    "/(api|trpc)(.*)",
  ],
};
