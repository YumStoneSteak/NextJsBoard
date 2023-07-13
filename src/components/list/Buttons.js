"use client";
import { useRouter } from "next/navigation";
export default function Buttons({ movieId }) {
  const router = useRouter();
  return (
    <div className="buttons">
      <button
        onClick={() => {
          router.push(`/detail/edit/${movieId}`);
        }}
      >
        📝 Edit
      </button>
      <button
        onClick={() => {
          if (window.confirm("글을 삭제하시겠습니까?")) {
            router.push(`/api/detail/delete/${movieId}`);
          }
        }}
      >
        🪣 Delete
      </button>
      <button
        onClick={() => {
          router.push("https://www.youtube.com/watch?v=Zspb26Dngv8&t");
        }}
      >
        🍿 Watch Now
      </button>
      <button
        onClick={() => {
          alert("내 마음 속에 저장");
          router.back;
        }}
      >
        ❤️ Add Watch List
      </button>
    </div>
  );
}
