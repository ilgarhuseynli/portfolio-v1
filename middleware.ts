import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = request.cookies.has("auth");

  // Auth routes - redirect to dashboard if authenticated
  if (pathname.startsWith("/login") && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Protected routes - redirect to login if not authenticated
  if (pathname.startsWith("/dashboard") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"],
}; 