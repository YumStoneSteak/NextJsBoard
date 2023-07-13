import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = (await connectDB).db("dongflix");
  let movie = await db
    .collection("movies")
    .findOne({ _id: new ObjectId(req.query.id) });

  return res.status(200).json(movie);
}
