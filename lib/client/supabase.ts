import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/types/supabase";
// createBrowserClient : 브라우저의 클라이언트. 웹페이지 안에서 supabase의 REST API를 AJAX요청을 할 때 사용
// createServerClient : 서버에서 supabase API를 호출할 때 쓰는 함수

export const createSupabaseBrowserClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
