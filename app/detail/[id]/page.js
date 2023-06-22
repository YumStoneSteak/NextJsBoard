import { connectDB } from "@/util/database";
import Image from "next/image";
import { ObjectId } from "mongodb";
import DetailLink from "../../list/detailLink";

async function Detail(props) {
  let client = await connectDB;
  const db = client.db("sample_mflix");
  let movie = await db
    .collection("movies")
    .findOne({ _id: new ObjectId(props.params.id) });
  const releaseDate = new Date(movie.released);
  const formattedDate = releaseDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className="list-bg">
        <div className="list-item">
          <Image
            src={`${movie.poster}`}
            alt="poster"
            width="162"
            height="261"
            className="list-img"
          />
          <div className="list-desc">
            <h4>{movie.title}</h4>
            <p>{formattedDate}</p>
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
            <DetailLink></DetailLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
