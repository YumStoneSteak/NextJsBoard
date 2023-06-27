/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";

export default function Add() {
  const router = useRouter();
  const onCancelClicked = () => {
    if (window.confirm("Do you really want to cancel the current info?")) {
      router.push("/");
    }
  };
  const nameArr = ["title", "year", "directors", "genres", "runtime"];

  return (
    <div className="list-bg">
      <h1>🎞️ Add Movie Info</h1>
      <form action="/api/add" method="POST">
        <div className="list-item">
          <img
            src={"/samplePoster.jpg"}
            alt="poster"
            width="162"
            height="261"
            className="list-img"
          />
          <div className="list-desc-input">
            {nameArr.map((name) => {
              return (
                <p key={name}>
                  <label>
                    <span>{name}:</span>
                    <input name={name} placeholder={name} />
                  </label>
                </p>
              );
            })}
            <p>
              <textarea
                name="fullplot"
                rows={4}
                cols={130}
                placeholder="Dicribe Plot"
              />
            </p>
            <p>
              <button
                className="buttons white"
                type="submit"
                onClick={() => alert("Add success")}
              >
                Save
              </button>
              <button className="buttons" type="reset">
                reset
              </button>
              <button
                className="buttons"
                onClick={() => onCancelClicked()}
                type="button"
              >
                cancel
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
