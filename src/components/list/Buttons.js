"use client";
import { useRouter } from "next/navigation";
export default function Buttons(props) {
  const router = useRouter();
  return (
    <div className="buttons">
      <button
        onClick={() => {
          router.push(`/detail/edit/${props.id}`);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          if (window.confirm("글을 삭제하시겠습니까?")) {
            // const res = await fetch(`/api/detail/delete/${props.id}`, {
            //   method: "DELETE",
            // });
            router.push(`/api/detail/delete/${props.id}`);
          }
        }}
      >
        Delete
      </button>

      <button
        onClick={() => {
          router.push("https://www.youtube.com/watch?v=Zspb26Dngv8&t");
        }}
      >
        Watch Now
      </button>
      <button
        onClick={() => {
          alert("내 마음 속에 저장");
          router.back;
        }}
      >
        Add Watch List
      </button>
    </div>
  );
}
