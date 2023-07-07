/* eslint-disable @next/next/no-img-element */
"use client";
import Buttons from "@/src/components/list/Buttons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OnCancelClicked from "@/src/components/list/OnCancelClicked";

export default function Edit(props) {
  const [movie, setMovie] = useState([]);
  const router = useRouter();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const movieData = await fetch(`/api/list?id=${props.params.id}`, {
      method: "GET",
    }).then((r) => {
      return r.json();
    });
    setMovie(movieData);
  };

  return (
    <div className="list-bg">
      <h1>Edit Movie Info</h1>
      <form action="/api/detail/edit" method="POST">
        <div className="list-item">
          <img
            src={`${movie.poster}`}
            alt=" movie poster "
            className="list-img-big"
          />

          <div className="list-desc-input">
            <label>
              <span>Title</span>
              <input name="title" defaultValue={movie.title} />
            </label>

            <label>
              <span>Year</span>
              <input name="year" defaultValue={movie.year} />
            </label>

            <label>
              <span>Directors</span>
              <input name="directors" defaultValue={movie.directors} />
            </label>

            <label>
              <span>Genres</span>
              <input name="genres" defaultValue={movie.genres} />
            </label>

            <label>
              <span>Runtime</span>
              <input name="runtime" defaultValue={movie.runtime} />
            </label>
            <label className="textarea-container">
              <textarea
                name="fullplot"
                rows={4}
                cols={130}
                defaultValue={movie.fullplot}
                className="scrollbar textarea"
              />
            </label>
            <input className="hidden" name="id" defaultValue={movie._id} />
            <input
              className="hidden"
              name="author"
              defaultValue={movie.author}
            />
            <p>
              <button className="buttons" type="submit">
                Save
              </button>
              <button className="buttons" type="reset">
                reset
              </button>
              <button
                className="buttons "
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
