import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  const db = (await connectDB).db("dongflix");
  let movies = await db.collection("movies").find().toArray();

  return res.status(200).json(movies);
}
