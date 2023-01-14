import { NextResponse } from "next/server";

export function middleware(req) {
  const {
    nextUrl: { pathname },
    cookies,
  } = req;

  const isAuthenticated = cookies.get("token")?.value;

  if (pathname.startsWith("/_next")) return NextResponse.next();

  if (isAuthenticated && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
