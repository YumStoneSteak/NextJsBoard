export default async function Write() {
  return (
    <div className="p-20">
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="title" />
        <input name="directors" placeholder="directors" />
        <button type="submit">전송</button>
      </form>
    </div>
  );
}
