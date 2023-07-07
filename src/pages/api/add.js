import { connectDB } from "@/src/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (session && req.method == "POST") {
    const userEmail = session.user.email;
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

    return res.redirect(302, `/alert/?result=success&code=AddSuccess`);
  } else {
    res.redirect(302, `/alert/?result=error&code=AddNeedLogin`);
  }
}
