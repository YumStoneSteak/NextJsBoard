import { connectDB } from "@/util/database";

export default async function List() {
  let client = await connectDB;
  const db = client.db("sample_mflix");
  let result = await db.collection("movies").find().toArray();

  return (
    <div className="list-bg">
      {result.slice(2, 10).map((item, index) => {
        return (
          <div className="list-item" key={index}>
            <img
              src={`${result[index].poster}`}
              alt={`/img/food${index}.png`}
              width="50px"
              height="auto"
            />
            <h4>{result[index].title}</h4>
            <p>{result[index].plot}</p>
          </div>
        );
      })}
    </div>
  );
}
