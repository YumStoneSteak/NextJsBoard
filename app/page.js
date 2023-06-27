import Link from "next/link";
import LoadList from "./list/LoadList";
import MainLinks from "./list/mainLinks";
import { connectDB } from "@/util/database";

export default async function List() {
  const db = (await connectDB).db("dongflix");
  let movies = await db.collection("movies").find().toArray();
  return (
    <>
      <LoadList result={movies} fromIndex={0} toIndex={100}></LoadList>
    </>
  );
}
