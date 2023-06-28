"use client";
import { useRouter } from "next/navigation";
export default function Buttons(props) {
  let router = useRouter();
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
          if (window.confirm("Do you really want to Delete Current Info?")) {
            fetch(`/api/detail/delete/${props.id}`, {
              method: "DELETE",
            });
            alert("Current Information Deleted");
            router.push("/");
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
