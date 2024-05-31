"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Oops! Something went wrong!</h2>
      <Link href="/">Home</Link>
    </div>
  );
}
