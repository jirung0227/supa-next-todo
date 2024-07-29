import { NextRequest, NextResponse } from "next/server.js";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  console.log("middleware 통과함");

  return response;
}
/** @description path* 모든 경로에 대해 적용 */
export const config = {
  matcher: ["/", "/todo-no-rls", "/api/:path*"],
};
