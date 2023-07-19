"use client";
import Image from "next/image";

export default function LoadPoster(props) {
  return (
    <img
      src={props.poster}
      alt="poster"
      width="162"
      height="261"
      className="list-img-big"
      onError={(e) => {
        e.target.src = "/images/logo.png";
      }}
    />
  );
}
