import Link from "next/link";
import getData from "./api/page";

export default async function Home() {
  const data = await getData();

  return (
    <>
      <h1>Sup, </h1>
      <p>
        Click here: <Link href="bruh">bruh</Link>
      </p>
      <p>
        or here: <Link href="milkyway/earth/eagle-lake">Eagle Lake</Link>
      </p>
      {data && data.map((todo, i) => <p key={i}>{todo.title}</p>)}
    </>
  );
}
