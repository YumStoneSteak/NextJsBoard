import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
  if (session && req.method === "DELETE") {
    const session = await getServerSession(req, res, authOptions);
    const userEmail = session.user.email;

    const db = (await connectDB).db("dongflix");
    const movie = await db
      .collection("movies")
      .findOne({ _id: new ObjectId(req.query.id) });

    if (movie.author === userEmail) {
      res.redirect(302, "/");
      const db = (await connectDB).db("dongflix");
      const movie = await db
        .collection("movies")
        .deleteOne({ _id: new ObjectId(req.query.id) });
    } else {
      const errorMessage = "DeleteNotAuthor";
      res.redirect(302, `/error/?code=${errorMessage}`);
    }
  } else {
    const errorMessage = "guest";
    res.redirect(302, `/error/?code=${errorMessage}`);
  }
}
