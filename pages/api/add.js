import { connectDB } from "@/util/database";
import getUserEmail from "./auth/getUserEmail";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  const userEmail = session.user.email;
  if (session && req.method == "POST") {
    const newReq = {
      poster:
        "https://www.howtogeek.com/wp-content/uploads/2022/05/Apple-event-featured.png?width=1198&trim=1,1&bg-color=000&pad=1,1",
      title: req.body.title,
      year: req.body.year,
      directors: [req.body.directors],
      genres: [req.body.genres],
      runtime: req.body.runtime,
      fullplot: req.body.fullplot,
      author: userEmail,
    };

    const db = (await connectDB).db("dongflix");
    let movies = db.collection("movies").insertOne(newReq);

    return res.redirect(302, "/");
  } else {
    const errorMessage = "AddNeedLogin";
    res.redirect(302, `/error/?code=${errorMessage}`);
  }
}
