import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  if (request.cookies.get("userId")) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL("/login", request.url))
  }
}

export const config = {
  matcher: "/profile",
}
