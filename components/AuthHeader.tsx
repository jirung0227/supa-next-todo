"use client";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { FcTodoList } from "react-icons/fc";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";

import React from "react";

interface AuthHeaderProps {
  user?: User | null;
}

const AuthHeader = ({ user }: AuthHeaderProps) => {
  const isLoggedIn = !!user?.email;
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  const handleGoogleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO,
      },
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <header className="h-[50px] bg-white">
      <div className="px-6 h-full">
        <div className="h-full flex flex-row justify-between items-center">
          <div
            onClick={goToHome}
            className="flex flex-row items-center cursor-pointer gap-2"
          >
            TODO
            <FcTodoList size={30} />
          </div>
          {isLoggedIn ? (
            <div
              onClick={handleLogout}
              className="flex flex-row items-center gap-2"
            >
              Logout
              <AiOutlineLogout size={30} />
            </div>
          ) : (
            <div
              onClick={handleGoogleLogin}
              className="flex flex-row items-center gap-2"
            >
              Login
              <FcGoogle size={30} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
