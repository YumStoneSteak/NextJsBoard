import LoadList from "./LoadList.jsx";

export default function List() {
  return (
    <div className="list-bg">
      <h1>DongFlix</h1>
      <LoadList fromIndex={0} toIndex={3}></LoadList>
    </div>
  );
}
