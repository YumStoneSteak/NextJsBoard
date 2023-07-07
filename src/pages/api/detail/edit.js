import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (session && req.method == "POST") {
    const userEmail = session.user.email;
    const newReq = {
      genres: [req.body.genres],
      title: req.body.title,
      directors: [req.body.directors],
      title: req.body.title,
      year: req.body.year,
      directors: [req.body.directors],
      runtime: req.body.runtime,
      author: userEmail,
    };
    let client = await connectDB;
    const db = client.db("dongflix");
    let movie = await db
      .collection("movies")
      .updateOne(
        { _id: new ObjectId(req.body.id.toString()) },
        { $set: newReq }
      );
    return res.redirect(302, `/alert/?result=success&code=EditSuccess`);
  } else {
    return res.redirect(302, `/alert/?result=error&code=guest`);
  }
}
