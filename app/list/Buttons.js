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
        onClick={async () => {
          if (
            window.confirm("Do you really want to delete the current info?")
          ) {
            try {
              const res = await fetch(`/api/detail/delete/${props.id}`, {
                method: "DELETE",
              });

              if (res.ok) {
                router.push("/");
              } else {
                const errorMessage = "DeleteNotAuthor";
                router.push(`/error/?code=${errorMessage}`);
              }
            } catch (error) {
              const errorMessage = "DeleteNotAuthor";
              router.push(`/error/?code=${errorMessage}`);
            }
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
