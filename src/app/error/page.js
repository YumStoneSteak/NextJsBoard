"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error(props) {
  const router = useRouter();
  const code = props.searchParams.code;

  useEffect(() => {
    const showMessage = (message) => {
      setTimeout(() => {
        alert(message);
      }, 200);
    };

    if (code === "EditNotAuthor") {
      showMessage("글 수정은 작성자 본인만 가능합니다.");
    } else if (code === "DeleteNotAuthor") {
      showMessage("글 삭제는 작성자 본인만 가능합니다.");
    } else if (code === "AddNeedLogin") {
      showMessage("글 추가는 로그인 시에만 가능합니다.");
    } else if (code === "guest") {
      showMessage("로그인해주세요.");
    } else {
      showMessage("오류 코드 감지 실패");
    }

    router.push("/");
  }, []);

  return null;
}
