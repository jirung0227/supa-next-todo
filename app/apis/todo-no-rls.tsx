"use client";

import { createSupabaseBrowserClient } from "@/lib/client/supabase";

//todoList 가져오기
export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false }); //id를 기준으로 내림차순 정렬

  return result.data;
};
