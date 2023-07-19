import { connectDB } from "@/src/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function myComment(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session && req.method == "POST") {
    const oldReq = JSON.parse(req.body);
    if (oldReq.comment !== "") {
      const newReq = {
        text: oldReq.text,
        name: session.user.name,
        email: session.user.email,
        movie_id: new ObjectId(oldReq.movie_id),
        date: new Date(),
      };
      const db = (await connectDB).db(process.env.MOVIE_DB);
      const myComment = db.collection("comments").insertOne(newReq);

      return res.status(200).json(success);
    }
  } else {
    return res.redirect(302, `/alert/?result=error&code=CmtNeedLogin`);
  }
}
