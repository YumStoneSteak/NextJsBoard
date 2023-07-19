import Link from "next/link";
import LoadList from "../components/list/LoadList";
import MainLinks from "../components/common/MainLinks";
import { connectDB } from "../util/database";
import loadAllInfos from "../pages/api/loadAllInfos";
import MainMessage from "../components/common/MainMessage";

export default async function List() {
  const movies = await loadAllInfos();
  return (
    <>
      <MainMessage />
      <LoadList result={movies} fromIndex={0} toIndex={100}></LoadList>
    </>
  );
}
