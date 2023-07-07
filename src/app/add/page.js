/* eslint-disable @next/next/no-img-element */
"use client";
import OnCancelClicked from "@/src/components/list/OnCancelClicked";

export default function Add() {
  const nameArr = ["title", "year", "directors", "genres", "runtime"];

  return (
    <div className="list-bg">
      <h1>🎞️ Add Movie Info</h1>
      <form action="\api\add" method="POST">
        <div className="list-item">
          <img
            src={"images/samplePoster.jpg"}
            alt="poster"
            className="list-img-big"
          />
          <div className="list-desc-input">
            {nameArr.map((name, index) => {
              return (
                <p key={name}>
                  <label>
                    <span>{name.toUpperCase()}</span>
                    <input name={name} />
                  </label>
                </p>
              );
            })}
            <label className="textarea-container">
              <textarea
                name="fullplot"
                rows={4}
                cols={130}
                placeholder={"Plot"}
                className="scrollbar textarea"
              />
            </label>
            <p>
              <button className="buttons white" type="submit">
                Save
              </button>
              <button className="buttons" type="reset">
                Reset
              </button>
              <button
                className="buttons"
                onClick={() => OnCancelClicked()}
                type="button"
              >
                Cancel
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
