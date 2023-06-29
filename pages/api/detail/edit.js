import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const newReq = {
      genres: [req.body.genres],
      title: req.body.title,
      directors: [req.body.directors],
      title: req.body.title,
      year: req.body.year,
      directors: [req.body.directors],

      runtime: req.body.runtime,
    };
    let client = await connectDB;
    const db = client.db("dongflix");
    let movie = await db
      .collection("movies")
      .updateOne({ _id: new ObjectId(req.body.id) }, { $set: newReq });
    res.redirect(302, "/");
  }
}
