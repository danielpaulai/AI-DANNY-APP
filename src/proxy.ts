import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/app(.*)", "/onboarding"]);
const isProtectedApi = createRouteMatcher([
  "/api/chat(.*)",
  "/api/workspace(.*)",
  "/api/messages(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req) || isProtectedApi(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/__clerk/:path*",
    "/(api|trpc)(.*)",
  ],
};
