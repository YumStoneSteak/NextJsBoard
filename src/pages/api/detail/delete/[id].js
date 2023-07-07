import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(req, res) {
  res.redirect(302, `/alert/?result=success&code=AddSuccess`);
  const session = await getServerSession(req, res, authOptions);

  if (session && req.method === "DELETE") {
    const userEmail = session.user.email;
    const db = (await connectDB).db("dongflix");
    let movie = await db
      .collection("movies")
      .findOne({ _id: new ObjectId(req.query.id) });

    if (movie.author === userEmail) {
      res.redirect(302, `/alert/?result=success&code=AddSuccess`);
      // res.redirect(302, "/alert/?result=success&code=DeleteSuccess");
      // const db = (await connectDB).db("dongflix");
      // let movie = await db
      //   .collection("movies")
      //   .deleteOne({ _id: new ObjectId(req.query.id) });

      console.log("삭제 완료");
    } else {
      return res.redirect(302, `/alert/?result=error&code=DeleteNotAuthor`);
      console.log("삭제 저자 아님 오류");
    }
  } else {
    console.log("guest");
    return res.redirect(302, `/alert/?result=error&code=guest`);
    console.log("삭제 로그인 안함 오류");
  }
}
