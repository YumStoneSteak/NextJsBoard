"use client";
import { useRouter } from "next/navigation";
export default function Buttons() {
  let router = useRouter();
  return (
    <div className="buttons">
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Watch Now
      </button>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Add Watch List
      </button>
    </div>
  );
}
