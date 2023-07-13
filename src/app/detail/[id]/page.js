/* eslint-disable @next/next/no-img-element */
import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";
import Buttons from "@/src/components/list/Buttons";
import Comment from "@/src/components/detail/Comment";

async function Detail(props) {
  const db = (await connectDB).db("dongflix");
  let movieId = props.params.id;
  let movie = await db
    .collection("movies")
    .findOne({ _id: new ObjectId(movieId) });
  return (
    <>
      <div className="list-bg">
        <div className="list-item-bg">
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
              <Buttons movieId={movieId} />
            </div>
          </div>
        </div>
        <Comment movieId={movieId} />
      </div>
    </>
  );
}

export default Detail;
