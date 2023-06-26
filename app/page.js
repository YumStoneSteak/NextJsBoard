import { connectDB } from "@/util/database";
import { Collection, MongoClient } from "mongodb";

import LoadList from "./list/LoadList";

export default function List() {
  return (
    <div className="list-bg">
      <h1 className="main-title">DONGFLIX</h1>
      <LoadList fromIndex={0} toIndex={20}></LoadList>
    </div>
  );
}
