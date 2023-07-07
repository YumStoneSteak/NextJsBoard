import Link from "next/link";
import LoadList from "../components/list/LoadList";
import MainLinks from "../components/list/MainLinks";
import { connectDB } from "../util/database";

export default async function List() {
  const db = (await connectDB).db("dongflix");
  let movies = JSON.stringify(await db.collection("movies").find().toArray());
  return (
    <>
      <LoadList result={movies} fromIndex={0} toIndex={100}></LoadList>
    </>
  );
}
