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
    const movieData = await fetch(`/api/loadInfo?id=${props.params.id}`, {
      method: "PUT",
    }).then((r) => {
      return r.json();
    });
    setMovie(movieData);
  };

    return (
      
<div className="list-bg">
      <div className="list-item-bg">
        <div className="list-item">
          <LoadPoster poster={movie.poster} />
          <div className="list-desc">
            <h4>{movie.title}</h4>
            <p>{movie.year}</p>
            <p>{movie.directors[0]}</p>
            <p>
              {movie.genres.join(", ") +
                " | " +
                movie.runtime +
                " mins" +
                " | " +
                movie.rated}
            </p>
            <br />
            <p>{movie.fullplot}</p>
            <br />
            <p>Author: {movie.author || "No Info"}</p>
            <Buttons movieId={movieId} />
          </div>
        </div>
      </div>
      <Comment movieId={movieId} />
    </div>




    <div className="list-MyComment-bg">
        <div className="list-MyComment">
          <div>
            <h3>Your Comment</h3>
          </div>
          <textarea
            className="textarea"
            placeholder="이 영화 어땠나요?"
            onChange={(e) => setMyComment(e.target.value)}
            value={MyComment}
          />
          <button
            className={`list-MyComment-btn ${!MyComment ? "disabled" : ""}`}
            onClick={() => fetchMyComment()}
            disabled={!MyComment}
          >
            ✏️ Save
          </button>
        </div>
      </div>
  );
}
