"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useColor } from "color-thief-react";

const LoadList = (props) => {
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(props.result);
    const updatedMovies = movies.map((movie, index) => ({
      id: movie._id.toString(),
      poster: movie.poster,
      title: movie.title,
      year: movie.year,
      directors: movie.directors,
      genreList: movie.genres.join(", "),
      runtime: movie.runtime,
      rated: movie.rated,
      plot: movie.plot,
    }));
    setNewMovies(updatedMovies);
  }, []);

  return (
    <SessionProvider>
      <div className="list-bg">
        {newMovies.map((movie, index) => (
          <MovieItem key={movie.id} movie={movie} index={index} />
        ))}
      </div>
    </SessionProvider>
  );
};

function getComplementaryColor(hexColor) {
  // # 제거
  const hex = hexColor.replace("#", "");

  // R, G, B 값을 16진수에서 10진수로 변환
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // 보색 계산
  const complementaryR = 255 - r;
  const complementaryG = 255 - g;
  const complementaryB = 255 - b;

  // 클리핑
  const complementaryRClipped = Math.max(0, Math.min(255, complementaryR));
  const complementaryGClipped = Math.max(0, Math.min(255, complementaryG));
  const complementaryBClipped = Math.max(0, Math.min(255, complementaryB));

  // 10진수를 16진수로 변환하여 보색 색상 반환
  const complementaryColor =
    "#" +
    ("00" + complementaryRClipped.toString(16)).slice(-2) +
    ("00" + complementaryGClipped.toString(16)).slice(-2) +
    ("00" + complementaryBClipped.toString(16)).slice(-2);

  return complementaryColor;
}

const MovieItem = ({ movie, index }) => {
  const Color = (poster) => {
    const googleProxyURL =
      "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

    const { data, loading, error } = useColor(
      googleProxyURL + encodeURIComponent(poster),
      "hex",
      {
        crossOrigin: "anonymous",
      }
    );
    return data;
  };

  // const otherColor = getComplementaryColor(data.toString());

  return (
    <div
      className="list-item"
      style={{
        background: Color(movie.poster),
        // color: otherColor,
        animationDelay: `${index * 20}ms`,
      }}
    >
      <div className="relativeHover">
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
        <Link href={"/detail/" + movie.id} className="Link">
          <h4>{movie.title + " (" + movie.year + ")"}</h4>
        </Link>
        <p>{movie.directors[0]}</p>
        <p>
          {movie.genreList + " | " + movie.runtime + " mins | " + movie.rated}
        </p>
        <p>{movie.plot}</p>
      </div>
    </div>
  );
};

export default LoadList;
