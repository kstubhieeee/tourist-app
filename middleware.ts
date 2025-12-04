import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "aarambh-escapes-secret-key-2024");

async function verifyAuth(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth-token")?.value;

  if (pathname.startsWith("/u")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const payload = await verifyAuth(token);
    if (!payload) {
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("auth-token");
      return response;
    }
  }

  if ((pathname === "/login" || pathname === "/signup") && token) {
    const payload = await verifyAuth(token);
    if (payload) {
      return NextResponse.redirect(new URL("/u/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/u/:path*", "/login", "/signup"],
};

