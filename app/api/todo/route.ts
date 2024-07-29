import { createServerSideClient } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  const supabase = await createServerSideClient();

  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false }); //id를 기준으로 내림차순 정렬

  console.log("todo GET API income", result);
  return NextResponse.json({ ...result });
};
