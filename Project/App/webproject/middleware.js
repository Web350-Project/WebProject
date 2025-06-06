import { NextResponse } from 'next/server';

export function middleware(req) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!auth|api/auth|api/users).*)"],
};