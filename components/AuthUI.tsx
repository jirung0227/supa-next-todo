"use client";
import React, { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import useHydrate from "@/hooks/useHydrate";
import { User } from "@supabase/supabase-js";

const AuthUI = () => {
  const [user, setUser] = useState<User>();
  const supabase = createSupabaseBrowserClient();
  const isMount = useHydrate();

  const getUserInfo = async () => {
    const result = await supabase.auth.getUser();
    if (result?.data?.user) setUser(result?.data?.user);
    console.log(result);
  };

  const handlelogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!isMount) return null; //서버 사이드 렌더링 단점 극복

  return (
    <section className="w-full p-10">
      <div>{user ? `로그인 됨 ${user?.email}` : "로그아웃됨."}</div>
      {user && (
        <button onClick={handlelogout} className="border-2 border-black">
          로그아웃됨.
        </button>
      )}
      <div className="mx-auto max-w-[500px]">
        <Auth
          redirectTo={process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_TEST}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          onlyThirdPartyProviders
          providers={["google"]}
        />
      </div>
    </section>
  );
};

export default AuthUI;
