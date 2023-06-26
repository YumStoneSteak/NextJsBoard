import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  let client = await connectDB;
  const db = client.db("dongflix");
  let movies = await db.collection("movies").find().toArray();
  if (1) {
    return res.status(200).json(movies[1]);
  }
}
