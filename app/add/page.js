/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import OnCancelClicked from "../list/OnCancelClicked.jsx";

export default function Add() {
  const nameArr = ["title", "year", "directors", "genres", "runtime"];
  const router = useRouter();

  return (
    <div className="list-bg">
      <h1>🎞️ Add Movie Info</h1>
      <form action="/api/add" method="POST">
        <div className="list-item">
          <img src={"/samplePoster.jpg"} alt="poster" className="list-img" />
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
                placeholder="Describe Plot"
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
                onClick={() => OnCancelClicked(router)}
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
