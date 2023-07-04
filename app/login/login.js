"use client";
import { signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = () => {
    if (!isLogin) {
      setIsLogin(true);
      signIn();
    } else {
      setIsLogin(false);
      signOut();
    }
  };
}
