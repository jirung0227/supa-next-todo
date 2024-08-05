import { NextResponse } from "next/server";
import { createServerSideClient } from "@/lib/supabase";

export async function GET(request: Request) {
  const overrideOrigin = process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME;
  const { searchParams, origin } = new URL(request.url);
  console.log(">>searchParams", searchParams);
  console.log(">>origin", origin);

  const code = searchParams.get("code");
  const next = searchParams.get("next");

  if (code) {
    const supabase = await createServerSideClient();
    // 토큰을 교환해주는 함수
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) return NextResponse.redirect(`${overrideOrigin}`);

    return NextResponse.redirect(`${overrideOrigin}${next}`);
  }
  return NextResponse.redirect(`${overrideOrigin}`);
}
