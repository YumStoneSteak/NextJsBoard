"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error(props) {
  const router = useRouter();
  const code = props.searchParams.code;
  useEffect(() => {
    if (code === "EditNotAuthor") {
      setTimeout(() => {
        alert("글 수정은 작성자 본인만 가능합니다.");
      }, 200);
    } else if (code === "DeleteNotAuthor") {
      setTimeout(() => {
        alert("글 삭제는 작성자 본인만 가능합니다.");
      }, 200);
    } else if (code === "AddNeedLogin") {
      setTimeout(() => {
        alert("글 추가는 로그인 시에만 가능합니다.");
      }, 200);
    } else if (code === "guest") {
      setTimeout(() => {
        alert("로그인해주세요.");
      }, 200);
    } else {
      setTimeout(() => {
        alert("code null error");
      }, 200);
    }

    router.push("/");
  }, []);

  return null;
}
