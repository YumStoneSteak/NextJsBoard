import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/util/database";

export default async function LoadList(props) {
  let client = await connectDB;
  const db = client.db("dongflix");
  let movies = await db.collection("movies").find().toArray();

  return (
    <div className="list-bg">
      {movies.slice(props.fromIndex, props.toIndex).map((item, index) => (
        <div className="list-item" key={index}>
          <Image
            src={`${movies[index].poster}`}
            alt={index}
            width="100"
            height="162"
            className="list-img"
          />
          <div className="list-desc">
            {
              <Link href={`detail/${movies[index]._id}`} className="Link">
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
