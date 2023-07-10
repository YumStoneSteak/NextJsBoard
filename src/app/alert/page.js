"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error(props) {
  const router = useRouter();
  const code = props.searchParams.code;
  const messages = {
    AddSuccess: "글 추가 완료",
    AddNeedLogin: "글 추가는 로그인 시에만 가능합니다.",
    EditSuccess: "글 수정 완료",
    EditNotAuthor: "글 수정은 작성자 본인만 가능합니다.",
    DeleteSuccess: "글 삭제 완료",
    DeleteNotAuthor: "글 삭제는 작성자 본인만 가능합니다.",
    SignUpSuccess: "회원가입되었습니다.",
    SignUpTermError: "조건에 맞추어 정보를 입력해주세요",
    SignUpError: "회원가입에 실패했습니다.",
    guest: "로그인 후 사용할 수 있습니다.",
  };

  const showMessage = (message) => {};

  useEffect(() => {
    if (code && messages[code]) {
      alert(messages[code]);
    } else {
      alert("오류 코드 감지 실패");
    }
    window.location.replace("/");
  }, []);

  return null;
}
