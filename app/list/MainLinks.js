"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MainLinks(props) {
  let router = useRouter();
  return (
    <div className="main-links">
      <Link className="main-link" href={"/add"}>
        🎞️ Add Movie Info
      </Link>
      <Link className="main-link" href={"/watchList"}>
        ❤️ Watch List
      </Link>
    </div>
  );
}
