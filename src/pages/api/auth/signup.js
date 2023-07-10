import { connectDB } from "@/src/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (
      req.body.name !== "" &&
      req.body.email !== "" &&
      req.body.password !== ""
    ) {
      const hashPw = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashPw;
      const db = (await connectDB).db("dongflix");
      db.collection("user_cred").insertOne(req.body);
      return res.redirect(302, `/alert/?result=success&code=SignUpSuccess`);
    } else {
      return res.redirect(302, `/alert/?result=error&code=SignUpTermError`);
    }
  } else {
    return res.redirect(302, `/alert/?result=error&code=SignUpError`);
  }
}
