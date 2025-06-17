import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/api/(.*)", "/favicon.ico", "/_next/(.*)", "/images/(.*)", "/fonts/(.*)", "/robots.txt"],
});

export const config = {
  matcher: ["/profile((?!.*\\.).*)"],
};
