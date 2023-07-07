"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error(props) {
  const router = useRouter();
  const code = props.searchParams.code;

  useEffect(() => {
    const messages = {
      AddSuccess: "글 추가 완료",
      EditSuccess: "글 수정 완료",
      DeleteSuccess: "글 삭제 완료",
      AddNeedLogin: "글 추가는 로그인 시에만 가능합니다.",
      EditNotAuthor: "글 수정은 작성자 본인만 가능합니다.",
      DeleteNotAuthor: "글 삭제는 작성자 본인만 가능합니다.",
      guest: "로그인 후 사용할 수 있습니다.",
    };
    const showMessage = (message) => {
      setTimeout(() => {
        alert(message);
      }, 200);
    };

    router.push("/");

    if (code && messages[code]) {
      showMessage(messages[code]);
    } else {
      showMessage("오류 코드 감지 실패");
    }
  }, []);

  return null;
}
