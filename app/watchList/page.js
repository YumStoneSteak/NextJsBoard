import { connectDB } from "@/util/database";
import Image from "next/image";
import { ObjectId } from "mongodb";
import Buttons from "@/app/list/Buttons";

export default async function add(props) {
  //   let client = await connectDB;
  //   const db = client.db("dongflix");
  //   const id = props.params.id.toString();
  //   let movie = await db.collection("movies").findOne({ _id: new ObjectId(id) });
  //   const releaseDate = new Date(movie.released);
  //   const formattedDate = releaseDate.toLocaleString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  //   let movie = [];
  //   return (
  //     <div className="list-bg">
  //       <h1>수정페이지</h1>
  //       <form action="/api/detail/edit" method="POST">
  //         <div className="list-item">
  //           <Image
  //             src={`${movie.poster}`}
  //             alt="poster"
  //             width="162"
  //             height="261"
  //             className="list-img"
  //           />
  //           <div className="list-desc">
  //             <h4>
  //               <input name="title" defaultValue={movie.title} />
  //             </h4>
  //             <p>{formattedDate}</p>
  //             <p>
  //               <input name="directors" defaultValue={movie.directors[0]} />
  //             </p>
  //             <p>
  //               {movie.genres.join(", ") +
  //                 " | " +
  //                 movie.runtime +
  //                 " mins" +
  //                 " | " +
  //                 movie.rated}
  //             </p>
  //             <br />
  //             <p>
  //               <textarea
  //                 name="fullplot"
  //                 rows={4}
  //                 cols={130}
  //                 defaultValue={movie.fullplot}
  //               />
  //             </p>
  //             <button className="buttons" type="submit">
  //               Save
  //             </button>
  //             <button className="buttons" type="cancel">
  //               Cancel
  //             </button>
  //             <input className="hidden" name="id" defaultValue={id} />
  //           </div>
  //         </div>
  //       </form>
  //     </div>
  //   );
  return "watch page";
}
