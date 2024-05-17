"use Client";

import { useEffect, useState } from "react";

export default function SSR() {
  const [state, useState] = useState(undefined);

  useEffect(() => {
    setState("client loaded");
  }, []);
  return (
    <>
      <div>SSR Page</div>
      <div>{state}</div>
    </>
  );
}
