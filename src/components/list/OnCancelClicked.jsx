"use client";
import { useRouter } from "next/router";

const OnCancelClicked = () => {
  const router = useRouter();
  if (window.confirm("Do you really want to cancel the current info?")) {
    router.push("/");
  }
};

export default OnCancelClicked;
