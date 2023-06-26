import { connectDB } from "@/util/database";
import { Collection, MongoClient } from "mongodb";

import LoadList from "./list/LoadList";

export default function List() {
  return (
    <div className="list-bg">
      <LoadList fromIndex={0} toIndex={9}></LoadList>
    </div>
  );
}
