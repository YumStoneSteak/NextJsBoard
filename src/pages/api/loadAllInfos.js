import { connectDB } from "@/src/util/database";
import { ObjectId } from "mongodb";

export default async function loadAllInfos() {
  const db = (await connectDB).db("dongflix");
  return JSON.stringify(await db.collection("movies").find().toArray());
}
