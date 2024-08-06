"use client";
// 클라이언트 사이드 렌더링
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
// todoList 가져오기 + by Id(soft delete되지 않은 데이터)
export const getTodoById = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);

  return result.data;
};

export const getTodosBySearch = async (terms: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}%`)
    .order("id", { ascending: false });

  return result.data;
};

//개발모드에서는 두번 실행됨
//todoList 생성하기
export const createTodos = async (content: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .insert([{ content }])
    .select();

  return result.data;
};

export const updateTodos = async (id: number, content: string) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .update({ content, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select();

  return result.data;
};

// todoList softDelete
export const deleteTodosSoft = async (id: number) => {
  const supabase = createSupabaseBrowserClient();
  const result = await supabase
    .from("todos_no_rls")
    .update({
      deleted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select();

  return result.data;
};

// todoList hardDelete (실제 데이터를 삭제하는 것은 위험하므로 주석처리)
// export const deleteTodosHard = async (id: number) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase.from("todos_no_rls").delete().eq("id", id);

//   return result.data;
// };
