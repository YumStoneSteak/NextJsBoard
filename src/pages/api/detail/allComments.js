import { connectDB } from "@/src/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function comments(req, res) {
  const session = await getServerSession(req, res, authOptions);
  if (req.method == "GET") {
    const db = (await connectDB).db("dongflix");
    const comments = JSON.stringify(
      await db
        .collection("comments")
        .find({ parentMovieId: new ObjectId(req.query.movieId) })
        .toArray()
    );
    return res.status(200).json(comments);
  } else {
    return res.redirect(302, `/alert/?result=error&code=CmtNeedLogin`);
  }
}
