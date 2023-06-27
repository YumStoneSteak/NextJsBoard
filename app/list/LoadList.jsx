/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function LoadList(props) {
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   loadData();
  // }, []);

  // const loadData = async () => {
  //   const test = await fetch("/api/list").then((r) => {
  //     return r.json();
  //   });

  //   setMovies(test);
  // };

  let movies = props.result;

  return (
    <div className="list-bg">
      {/* .slice(props.fromIndex, props.toIndex) */}
      {movies.map((item, index) => (
        <div className="list-item" key={index}>
          <div class="relative">
            <div class="overlay-wrap-up">
              <div class="overlay-black-up">
                <span
                  class="overlay-black-span"
                  onClick={() => alert("Added to Watch List")}
                >
                  ❤️
                </span>
              </div>
            </div>
            <img
              src={`${movies[index].poster}`}
              alt={index}
              width="100"
              height="162"
              className="list-img"
            />
          </div>

          <div className="list-desc">
            {
              <Link
                href={`detail/${movies[index]._id.toString()}`}
                className="Link"
              >
                <h4>{movies[index].title + " (" + movies[index].year + ")"}</h4>
              </Link>
            }

            <p>{movies[index].directors[0]}</p>
            <p>
              {movies[index].genres.join(", ") +
                " | " +
                movies[index].runtime +
                " mins" +
                " | " +
                movies[index].rated}
            </p>
            <p>{movies[index].plot}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
