import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";

export default async function loadAllInfos() {
  const db = (await connectDB).db(process.env.MOVIE_DB);
  const movies = await db
    .collection("movies")
    .aggregate([
      {
        $match: {
          poster: { $exists: true },
          directors: { $exists: true },
          genres: { $exists: true },
          num_mflix_comments: { $gt: 2 },
        },
      },
      { $sample: { size: 100 } },
    ])
    .toArray();
  return JSON.stringify(movies);
}
