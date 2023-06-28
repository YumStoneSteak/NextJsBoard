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

  let movies = JSON.parse(props.result);

  return (
    <div className="list-bg">
      {/* .slice(props.fromIndex, props.toIndex) */}
      {movies.map((item, index) => (
        <div className="list-item" key={index}>
          <div className="relative">
            <div className="overlay">
              <span
                className="overlay-black-span"
                onClick={() => alert("Added to Watch List")}
              >
                ❤️
              </span>
            </div>

            <img
              src={`${movies[index].poster}`}
              alt={index}
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
