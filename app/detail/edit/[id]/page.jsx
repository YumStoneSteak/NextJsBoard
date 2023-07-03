/* eslint-disable @next/next/no-img-element */
"use client";
import Buttons from "@/app/list/Buttons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OnCancelClicked from "@/app/list/OnCancelClicked";

export default function Edit(props) {
  const [movie, setMovie] = useState([]);
  const router = useRouter();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const movieData = await fetch("/api/list", {
      method: "POST",
      body: props.params.id,
    }).then((r) => {
      return r.json();
    });
    setMovie(movieData);
  };

  return (
    <div className="list-bg">
      <h1>수정페이지</h1>
      <form action="/api/detail/edit" method="POST">
        <div className="list-item">
          <img
            src={`${movie.poster}`}
            alt=" movie poster "
            width="162"
            height="261"
            className="list-img"
          />

          <div className="list-desc-input">
            <p>
              <label>
                <span>title:</span>
                <input name="title" defaultValue={movie.title} />
              </label>
            </p>
            <p>
              <label>
                <span>year:</span>
                <input name="year" defaultValue={movie.year} />
              </label>
            </p>
            <p>
              <label>
                <span>directors:</span>
                <input name="directors" defaultValue={movie.directors} />
              </label>
            </p>
            <p>
              <label>
                <span>genres:</span>
                <input name="genres" defaultValue={movie.genres} />
              </label>
            </p>
            <p>
              <label>
                <span>runtime:</span>
                <input name="runtime" defaultValue={movie.runtime} />
              </label>
            </p>

            <p>
              <textarea
                name="fullplot"
                rows={4}
                cols={130}
                defaultValue={movie.fullplot}
              />
            </p>
            <input className="hidden" name="id" defaultValue={movie._id} />
            <p>
              <button className="buttons" type="submit">
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