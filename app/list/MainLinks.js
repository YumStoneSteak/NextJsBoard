"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

export default function MainLinks(props) {
  let router = useRouter();

  return (
    <div className="main-links">
      <Link
        className="main-link"
        href={"/add"}
        style={{ animationDelay: "10ms" }}
      >
        🎞️ Add Movie
      </Link>

      <Link
        className="main-link"
        href={"/watchList"}
        style={{ animationDelay: "60ms" }}
      >
        ❤️ Watch List
      </Link>

      {props.session ? (
        <Link
          className="main-link"
          href={""}
          style={{ animationDelay: "110ms" }}
          onClick={() => {
            signOut();
          }}
        >
          🔓 Log Out
        </Link>
      ) : (
        <Link
          className="main-link"
          href={""}
          onClick={() => {
            signIn();
          }}
        >
          🔒 Log In
        </Link>
      )}
    </div>
  );
}
