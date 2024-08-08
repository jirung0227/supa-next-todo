import { createServerSideClient } from "@/lib/supabase";

/**
 * session을 사용하는 경우 인증을 확인할 때 getSession을
 * 사용하면 메모리에서 데이터를 가져오기 때문에 빠르다. 하지만 비안전
 * getUser는 DB에서 사용자의 정보를 가져오는 것이기 때문에 느리다.
 */
export const getUser = async ({ serverComponent = false }) => {
  const supabase = await createServerSideClient(serverComponent);

  const user = await supabase.auth.getUser();
  return user?.data?.user;
};

export const getProfileById = async ({ serverComponent = false }) => {};
