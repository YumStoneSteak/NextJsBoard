import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  // && req.method === "DELETE"
  if (session) {
    const userEmail = session.user.email;
    const db = (await connectDB).db(process.env.MOVIE_DB);
    let movie = await db
      .collection("movies")
      .findOne({ _id: new ObjectId(req.query.id) });

    if (movie.author === userEmail) {
      let movie = await db
        .collection("movies")
        .deleteOne({ _id: new ObjectId(req.query.id) });
      return res.redirect(302, "/alert/?result=success&code=DeleteSuccess");
    } else {
      return res.redirect(302, `/alert/?result=error&code=DeleteNotAuthor`);
    }
  } else {
    return res.redirect(302, `/alert/?result=error&code=guest`);
  }
}
