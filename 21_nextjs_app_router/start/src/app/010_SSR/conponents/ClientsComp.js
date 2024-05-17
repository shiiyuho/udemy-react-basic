"use Client";

import "./lib";

export default function SSR() {
  const [state, setState] = useState(undefined);

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
