import { connectDB } from "@/util/database";
import { Collection, MongoClient } from "mongodb";

export default async function Home() {
  let client = await connectDB;
  const db = client.db("sample_airbnb");
  let result = await db.collection("listingsAndReviews").find().toArray();

  return <main>{result[0].description}</main>;
}
