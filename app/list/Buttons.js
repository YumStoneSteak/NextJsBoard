"use client";
import { useRouter } from "next/navigation";
export default function Buttons(props) {
  let router = useRouter();
  return (
    <div className="buttons">
      <button
        onClick={() => {
          router.push(`/detail/edit/${props.href}`);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          if (window.confirm("Do you really want to Delete Current Info?")) {
            alert("Current Information Deleted");
            router.push("/api/detail/delete.js");
          }
          router.back;
        }}
      >
        Delete
      </button>

      <button
        onClick={() => {
          router.push("https://youtu.be/tIxeVuO7TKk");
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
