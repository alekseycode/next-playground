export default async function eaglelake() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return (
    <>
      <div>Eagle lake</div>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
