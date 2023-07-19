"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function LoadList(props) {
  const movies = JSON.parse(props.result);

  const newMovies = movies.map((movie, index) => {
    return {
      id: movie._id.toString(),
      poster: movie.poster,
      title: movie.title,
      year: movie.year,
      directors: movie.directors,
      genreList: movie.genres.join(", "),
      runtime: movie.runtime,
      rated: movie.rated,
      plot: movie.plot,
    };
  });

  return (
    <SessionProvider>
      <div className="list-bg">
        {newMovies.map((movie, index) => (
          <div
            className="list-item"
            style={{ animationDelay: `${index * 100}ms` }}
            key={index}
          >
            <div className="relative">
              <div className="overlay">
                <span
                  className="overlay-black-span"
                  onClick={() => alert("내 마음 속에 저장")}
                >
                  ❤️
                </span>
              </div>

              <Image
                src={movie.poster}
                width={152}
                height={224}
                alt={index}
                className="list-img"
              />
            </div>

            <div className="list-desc">
              <Link href={`/detail/${movie.id}`} className="Link">
                <h4>{`${movie.title} (${movie.year})`}</h4>
              </Link>

              <p>{movie.directors[0]}</p>
              <p>{`${movie.genreList} | ${movie.runtime} mins | ${movie.rated}`}</p>
              <p>{movie.plot}</p>
            </div>
          </div>
        ))}
      </div>
    </SessionProvider>
  );
}
