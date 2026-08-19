import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// When someone visits verse.educapp.us, transparently serve the /verse page.
// educapp.us and all other paths are left completely untouched.
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? ""
  const isVerseSubdomain = host.split(":")[0].toLowerCase() === "verse.educapp.us"

  if (isVerseSubdomain) {
    const url = request.nextUrl.clone()
    // Only rewrite the root of the subdomain so assets (/_next, /favicon, etc.)
    // still resolve normally.
    if (url.pathname === "/") {
      url.pathname = "/verse"
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  // Skip static assets and Next internals for performance.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
