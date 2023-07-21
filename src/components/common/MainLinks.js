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
        style={{ animationDelay: "0ms" }}
      >
        <div>🎞️</div>
        <div>Add Info</div>
      </Link>

      <Link
        className="main-link"
        href={"/watchList"}
        style={{ animationDelay: "100ms" }}
      >
        <div>❤️</div>
        <div>My List</div>
      </Link>

      {props.session ? (
        <Link
          className="main-link"
          href={""}
          style={{ animationDelay: "200ms" }}
          onClick={() => {
            signOut();
          }}
        >
          <div>🔓</div>
          <div>Log Out</div>
        </Link>
      ) : (
        <Link
          className="main-link"
          href={""}
          style={{ animationDelay: "300ms" }}
          onClick={() => {
            signIn();
          }}
        >
          <div>🔒</div>
          <div>Log In</div>
        </Link>
      )}
      {!props.session && (
        <Link
          className="main-link"
          href={"/signUp"}
          style={{ animationDelay: "400ms" }}
        >
          <div>🔑</div>
          <div>Sign Up</div>
        </Link>
      )}
    </div>
  );
}
