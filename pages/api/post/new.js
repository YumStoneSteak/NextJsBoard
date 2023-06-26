import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const db = (await connectDB).db("dongflix");
    let movies = db.collection("movies").insertOne(req.body);
    console.log(req.body);
    return res.status(200).json(req.body);
  }
}
