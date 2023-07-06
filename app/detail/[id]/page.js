/* eslint-disable @next/next/no-img-element */
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Buttons from "@/app/list/Buttons";
import getUserEmail from "@/pages/api/auth/getUserEmail";

async function Detail(props) {
  const db = (await connectDB).db("dongflix");
  let movie = await db
    .collection("movies")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <>
      <div className="list-bg">
        <div className="list-item">
          <img
            src={`${movie.poster}`}
            alt="poster"
            width="162"
            height="261"
            className="list-img-big"
          />
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
            <Buttons id={movie._id.toString()} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
