import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const { genres, title, directors, year, runtime } = req.body;

  if (session && req.method == "PUT") {
    const userEmail = session.user.email;
    const newReq = {
      genres: [genres],
      title,
      directors: [directors],
      year,
      runtime,
      author: userEmail,
    };
    const db = (await connectDB).db(process.env.MOVIE_DB);
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
